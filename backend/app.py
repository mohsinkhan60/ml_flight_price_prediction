from flask import Flask, request, jsonify
import pickle
import os
import requests
from datetime import datetime, timedelta
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# Load the pre-trained model.
# If a MODEL_URL environment variable is provided (recommended for deployment),
# download the model at startup to a local path and load it from there. This
# avoids committing a large `model.pkl` into the repository which can exceed
# serverless bundle size limits.
def load_model():
    local_path = os.path.join('/tmp', 'model.pkl') if os.name != 'nt' else 'model.pkl'
    model_url = os.environ.get('MODEL_URL')

    # If MODEL_URL is set, try to download the model if it's not already present.
    if model_url:
        if not os.path.exists(local_path):
            try:
                resp = requests.get(model_url, stream=True, timeout=30)
                resp.raise_for_status()
                with open(local_path, 'wb') as f:
                    for chunk in resp.iter_content(chunk_size=8192):
                        if chunk:
                            f.write(chunk)
            except Exception as e:
                # If download fails, raise so the app start-up fails loudly in deployment.
                raise RuntimeError(f"Failed to download model from MODEL_URL: {e}")
    else:
        # No MODEL_URL provided; expect model.pkl to exist in the repo root.
        local_path = 'model.pkl'

    # Load the model from the chosen path
    try:
        with open(local_path, 'rb') as f:
            return pickle.load(f)
    except FileNotFoundError:
        raise RuntimeError(f"Model file not found at '{local_path}'. Set MODEL_URL or add model.pkl.")


# Initialize model
model = load_model()

# Dictionaries for categorical variables
airline_dict = {'AirAsia': 0, "Indigo": 1, "GO_FIRST": 2, "SpiceJet": 3, "Air_India": 4, "Vistara": 5}
source_dict = {'Delhi': 0, "Hyderabad": 1, "Bangalore": 2, "Mumbai": 3, "Kolkata": 4, "Chennai": 5}
departure_dict = {'Early_Morning': 0, "Morning": 1, "Afternoon": 2, "Evening": 3, "Night": 4, "Late_Night": 5}
stops_dict = {'zero': 0, "one": 1, "two_or_more": 2}
arrival_dict = {'Early_Morning': 0, "Morning": 1, "Afternoon": 2, "Evening": 3, "Night": 4, "Late_Night": 5}
destination_dict = {'Delhi': 0, "Hyderabad": 1, "Mumbai": 2, "Bangalore": 3, "Chennai": 4, "Kolkata": 5}
class_dict = {'Economy': 0, 'Business': 1}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        airline = airline_dict[data['airline']]
        source_city = source_dict[data['source_city']]
        departure_time = departure_dict[data['departure_time']]
        stops = stops_dict[data['stops']]
        arrival_time = arrival_dict[data['arrival_time']]
        destination_city = destination_dict[data['destination_city']]
        travel_class = class_dict[data['class']]
        
        # Calculate date difference
        departure_date = datetime.strptime(data['departure_date'], '%Y-%m-%d')
        date_diff = (departure_date - datetime.today()).days + 1

        # Prepare features for prediction
        features = [airline, source_city, departure_time, stops, arrival_time, destination_city, travel_class, date_diff]
        prediction = model.predict([features])[0]

        return jsonify({'prediction': round(prediction, 2)})
    except KeyError as e:
        return jsonify({'error': f'Missing data for: {e}'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

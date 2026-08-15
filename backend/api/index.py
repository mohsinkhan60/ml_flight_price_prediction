from flask import Flask, request, jsonify
import pickle
from datetime import datetime
from flask_cors import CORS
import os

app = Flask(__name__)

# Configure CORS - Allow all origins for flexibility (you can restrict this in production)
CORS(app, resources={
    r"/*": {
        "origins": "*",  # Allow all origins - recommended for development/testing
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization", "Accept"],
        "supports_credentials": False
    }
})

# Global variable to cache the model
_model = None

def load_model():
    """Load the model from pickle file, with caching for serverless"""
    global _model
    if _model is None:
        try:
            # Get the directory of the current file
            current_dir = os.path.dirname(os.path.abspath(__file__))
            model_path = os.path.join(current_dir, 'model.pkl')
            
            with open(model_path, 'rb') as f:
                _model = pickle.load(f)
        except Exception as e:
            print(f"Error loading model: {e}")
            raise
    return _model

# Dictionaries for categorical variables
airline_dict = {'AirAsia': 0, "Indigo": 1, "GO_FIRST": 2, "SpiceJet": 3, "Air_India": 4, "Vistara": 5}
source_dict = {'Delhi': 0, "Hyderabad": 1, "Bangalore": 2, "Mumbai": 3, "Kolkata": 4, "Chennai": 5}
departure_dict = {'Early_Morning': 0, "Morning": 1, "Afternoon": 2, "Evening": 3, "Night": 4, "Late_Night": 5}
stops_dict = {'zero': 0, "one": 1, "two_or_more": 2}
arrival_dict = {'Early_Morning': 0, "Morning": 1, "Afternoon": 2, "Evening": 3, "Night": 4, "Late_Night": 5}
destination_dict = {'Delhi': 0, "Hyderabad": 1, "Mumbai": 2, "Bangalore": 3, "Chennai": 4, "Kolkata": 5}
class_dict = {'Economy': 0, 'Business': 1}

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        'message': 'Flight Price Prediction API',
        'status': 'running',
        'version': '1.0.0',
        'endpoints': {
            '/': 'GET - API information',
            '/predict': 'POST - Predict flight price'
        }
    })

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    # Handle preflight request
    if request.method == 'OPTIONS':
        return jsonify({'status': 'ok'}), 200
    
    try:
        data = request.json
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        # Load model
        model = load_model()
        
        # Extract and validate data
        airline = airline_dict.get(data.get('airline'))
        source_city = source_dict.get(data.get('source_city'))
        departure_time = departure_dict.get(data.get('departure_time'))
        stops = stops_dict.get(data.get('stops'))
        arrival_time = arrival_dict.get(data.get('arrival_time'))
        destination_city = destination_dict.get(data.get('destination_city'))
        travel_class = class_dict.get(data.get('class'))
        
        # Check if any value is None
        if None in [airline, source_city, departure_time, stops, arrival_time, destination_city, travel_class]:
            return jsonify({'error': 'Invalid or missing data in request'}), 400
        
        # Calculate date difference
        departure_date = datetime.strptime(data['departure_date'], '%Y-%m-%d')
        date_diff = (departure_date - datetime.today()).days + 1

        # Prepare features for prediction
        features = [airline, source_city, departure_time, stops, arrival_time, destination_city, travel_class, date_diff]
        prediction = model.predict([features])[0]

        return jsonify({'prediction': round(prediction, 2)}), 200
    except KeyError as e:
        return jsonify({'error': f'Missing required field: {str(e)}'}), 400
    except ValueError as e:
        return jsonify({'error': f'Invalid data format: {str(e)}'}), 400
    except Exception as e:
        print(f"Prediction error: {str(e)}")
        return jsonify({'error': f'Server error: {str(e)}'}), 500

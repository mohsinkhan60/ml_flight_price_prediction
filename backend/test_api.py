#!/usr/bin/env python3
"""
Test script for the Flight Price Prediction API
"""

import requests
import json
from datetime import datetime, timedelta

# API endpoint
API_URL = "http://localhost:8000/predict"
# Or use deployed version:
# API_URL = "https://ml-flight-price-prediction-backend.vercel.app/predict"

# Test data
test_data = {
    "airline": "SpiceJet",
    "source_city": "Delhi",
    "destination_city": "Mumbai",
    "departure_time": "Morning",
    "arrival_time": "Evening",
    "stops": "zero",
    "class": "Economy",
    "departure_date": (datetime.now() + timedelta(days=30)).strftime("%Y-%m-%d")
}

print("=" * 60)
print("Testing Flight Price Prediction API")
print("=" * 60)
print(f"\nAPI URL: {API_URL}")
print(f"\nTest Data:")
print(json.dumps(test_data, indent=2))
print("\n" + "=" * 60)

try:
    # Send POST request
    print("\nSending request...")
    response = requests.post(
        API_URL,
        json=test_data,
        headers={"Content-Type": "application/json"},
        timeout=30
    )
    
    print(f"\nStatus Code: {response.status_code}")
    print(f"Response Headers: {dict(response.headers)}")
    
    if response.status_code == 200:
        result = response.json()
        print(f"\n✅ SUCCESS!")
        print(f"Predicted Price: ₹{result['prediction']}")
    else:
        print(f"\n❌ ERROR!")
        print(f"Response: {response.text}")
        
except requests.exceptions.ConnectionError:
    print("\n❌ CONNECTION ERROR!")
    print("Could not connect to the API.")
    print("Make sure the backend server is running.")
    
except requests.exceptions.Timeout:
    print("\n❌ TIMEOUT ERROR!")
    print("The request took too long to complete.")
    
except Exception as e:
    print(f"\n❌ UNEXPECTED ERROR!")
    print(f"Error: {str(e)}")

print("\n" + "=" * 60)

import axios from "axios";

const API_URL = "https://ml-flight-price-prediction-backend.vercel.app/predict";

export const predictFlightPrice = async (formData) => {
  try {
    console.log("Sending prediction request:", formData);
    
    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 30000, // 30 second timeout
    });
    
    console.log("Prediction response:", response.data);
    
    return {
      success: true,
      prediction: response.data.prediction
    };
  } catch (error) {
    console.error("Prediction error:", error);
    
    // Detailed error handling
    if (error.response) {
      // Server responded with error
      const errorMessage = error.response.data?.error || "Server error occurred";
      return {
        success: false,
        error: `${errorMessage} (Status: ${error.response.status})`
      };
    } else if (error.request) {
      // Request made but no response
      return {
        success: false,
        error: "No response from server. Please check your internet connection or try again later."
      };
    } else {
      // Error setting up request
      return {
        success: false,
        error: `Request failed: ${error.message}`
      };
    }
  }
};

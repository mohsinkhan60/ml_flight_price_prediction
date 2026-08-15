import axios from "axios";

const API_URL = "https://ml-flight-price-prediction-backend.vercel.app/predict";

export const predictFlightPrice = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return {
      success: true,
      prediction: response.data.prediction
    };
  } catch (error) {
    console.error("Error fetching prediction:", error);
    return {
      success: false,
      error: error.response?.data?.error || "Failed to get prediction. Please try again."
    };
  }
};

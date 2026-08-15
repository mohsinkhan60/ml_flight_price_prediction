import React, { useState } from "react";
import StepIndicator from "./components/ui/StepIndicator";
import Step1Route from "./components/steps/Step1Route";
import Step2Details from "./components/steps/Step2Details";
import Step3Date from "./components/steps/Step3Date";
import PredictionResult from "./components/PredictionResult";
import { predictFlightPrice } from "./utils/api";
import { STEPS } from "./constants/flightData";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    airline: "",
    source_city: "",
    departure_time: "",
    stops: "",
    arrival_time: "",
    destination_city: "",
    class: "",
    departure_date: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    const result = await predictFlightPrice(formData);

    if (result.success) {
      setPrediction(result.prediction);
    } else {
      setError(result.error);
      alert(result.error);
    }

    setLoading(false);
  };

  const resetForm = () => {
    setPrediction(null);
    setCurrentStep(1);
    setFormData({
      airline: "",
      source_city: "",
      departure_time: "",
      stops: "",
      arrival_time: "",
      destination_city: "",
      class: "",
      departure_date: "",
    });
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex flex-col items-center py-12 px-4">
      {/* Header */}
      {!prediction && (
        <div className="text-center mb-12 max-w-4xl animate-fadeIn">
          <div className="inline-block mb-4">
            <span className="text-[#797979] text-xs font-mono uppercase tracking-wide">
              PRICE PREDICTION
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-normal text-white leading-tight tracking-tight">
            Find Your Best Flight Price
          </h1>
          <p className="text-[#b9b9b9] text-lg mt-6 leading-relaxed">
            Answer a few simple questions to get accurate price predictions
          </p>
        </div>
      )}

      {/* Step Indicator */}
      {!prediction && <StepIndicator currentStep={currentStep} steps={STEPS} />}

      {/* Form Card */}
      {!prediction && (
        <div className="bg-[#212121] rounded-xl p-6 md:p-8 w-full max-w-2xl border border-[#353535] shadow-2xl">
          {currentStep === 1 && (
            <Step1Route
              formData={formData}
              onChange={handleChange}
              onNext={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <Step2Details
              formData={formData}
              onChange={handleChange}
              onNext={() => setCurrentStep(3)}
              onBack={() => setCurrentStep(1)}
            />
          )}

          {currentStep === 3 && (
            <Step3Date
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onBack={() => setCurrentStep(2)}
              loading={loading}
            />
          )}
        </div>
      )}

      {/* Prediction Result */}
      {prediction !== null && (
        <PredictionResult
          prediction={prediction}
          onReset={resetForm}
          formData={formData}
        />
      )}
    </div>
  );
}

export default App;

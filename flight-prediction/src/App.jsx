import React, { useState, useEffect, useRef } from "react";
import { Airplane, Moon, Sun1 } from "iconsax-react";
import StepIndicator from "./components/ui/StepIndicator";
import Step1Route from "./components/steps/Step1Route";
import Step2Details from "./components/steps/Step2Details";
import Step3Date from "./components/steps/Step3Date";
import PredictionResult from "./components/PredictionResult";
import { predictFlightPrice } from "./utils/api";
import { STEPS } from "./constants/flightData";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Initialize darkMode from localStorage, default to true if not set
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('flightfare-theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  
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

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newTheme = !prev;
      // Save to localStorage
      localStorage.setItem('flightfare-theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-[#0b0b0b]' : 'bg-white'}`}>
      {/* Top Navigation Bar */}
      {!prediction && (
        <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-[#0b0b0b] border-[#353535]' : 'bg-white border-[#ededed]'} border-b`}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-white' : 'bg-[#0b0b0b]'}`}> */}
                <Airplane size={24} variant="Bold" color={!darkMode ? "#0b0b0b" : "#ffffff"} />
              {/* </div> */}
              <div>
                <h1 className={`text-xl font-medium tracking-tight ${darkMode ? 'text-white' : 'text-[#0b0b0b]'}`}>FlightFare AI</h1>
                {/* <p className="text-[#797979] text-xs font-mono uppercase tracking-wide">Smart Price Prediction</p> */}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`text-sm font-mono ${darkMode ? 'text-[#b9b9b9]' : 'text-[#797979]'}`}>
                Step {currentStep} of {STEPS.length}
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all ${
                  darkMode 
                    ? 'bg-[#212121] hover:bg-[#353535]' 
                    : 'bg-[#ededed] hover:bg-[#e0e0e0]'
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun1 size={20} variant="Bold" color="#ffffff" />
                ) : (
                  <Moon size={20} variant="Bold" color="#0b0b0b" />
                )}
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content Area - Stepper on Top */}
      <main className="flex-1 flex flex-col pt-20">
        {!prediction ? (
          <div className="flex-1 flex flex-col">
            {/* Top - Step Indicator */}
            <div className={`py-8 pt-20 px-6 border-b-0 ${
              darkMode ? 'bg-[#0b0b0b] border-[#353535]' : 'bg-[#fafafa] border-[#ededed]'
            }`}>
              <StepIndicator currentStep={currentStep} steps={STEPS} darkMode={darkMode} horizontal={true} />
            </div>

            {/* Bottom - Step Content */}
            <div className="flex-1 flex items-center justify-center px-6 pb-12 overflow-y-auto">
              <div className="w-full max-w-5xl animate-fadeIn">
                {currentStep === 1 && (
                  <Step1Route
                    formData={formData}
                    onChange={handleChange}
                    onNext={() => setCurrentStep(2)}
                    darkMode={darkMode}
                  />
                )}

                {currentStep === 2 && (
                  <Step2Details
                    formData={formData}
                    onChange={handleChange}
                    onNext={() => setCurrentStep(3)}
                    onBack={() => setCurrentStep(1)}
                    darkMode={darkMode}
                  />
                )}

                {currentStep === 3 && (
                  <Step3Date
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onBack={() => setCurrentStep(2)}
                    loading={loading}
                    darkMode={darkMode}
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center px-6 py-12 overflow-y-auto">
            <PredictionResult
              prediction={prediction}
              onReset={resetForm}
              formData={formData}
              darkMode={darkMode}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      {/* {!prediction && (
        <footer className={`${darkMode ? 'bg-[#0b0b0b] border-[#353535]' : 'bg-white border-[#ededed]'} border-t py-4`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[#797979] text-xs text-center font-mono">
              Powered by Machine Learning • Historical Data Analysis
            </p>
          </div>
        </footer>
      )} */}
    </div>
  );
}

export default App;

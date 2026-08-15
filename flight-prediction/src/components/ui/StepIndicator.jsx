import React from "react";

const StepIndicator = ({ currentStep, steps }) => {
  return (
    <div className="flex items-center justify-center mb-12 gap-4">
      {steps.map((step, idx) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center">
            <div
              className={`w-16 h-16 rounded-lg flex items-center justify-center text-xl font-medium transition-all ${
                currentStep >= step.id
                  ? "bg-white text-[#0b0b0b] shadow-lg"
                  : "bg-[#212121] text-[#797979] border border-[#353535]"
              }`}
            >
              {currentStep > step.id ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                step.id
              )}
            </div>
            <div className="mt-3 text-center">
              <p
                className={`text-sm font-medium ${
                  currentStep >= step.id ? "text-white" : "text-[#797979]"
                }`}
              >
                {step.title}
              </p>
              <p className="text-xs text-[#797979] mt-1 max-w-[100px]">
                {step.description}
              </p>
            </div>
          </div>
          {idx < steps.length - 1 && (
            <div
              className={`w-16 h-px mb-12 transition-all ${
                currentStep > step.id ? "bg-white" : "bg-[#353535]"
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;

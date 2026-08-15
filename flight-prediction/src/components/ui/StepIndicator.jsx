import React from "react";
import { TickCircle } from "iconsax-react";

const StepIndicator = ({ currentStep, steps, darkMode = true, horizontal = false }) => {
  if (horizontal) {
    // Horizontal layout (top of page)
    return (
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            const isCompleted = currentStep > step.id;
            const isActive = currentStep === step.id;
            const isUpcoming = currentStep < step.id;

            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center flex-1">
                  {/* Icon Circle */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? darkMode 
                          ? "bg-white shadow-lg shadow-white/20 scale-110"
                          : "bg-[#0b0b0b] shadow-lg shadow-black/20 scale-110"
                        : isCompleted
                        ? darkMode
                          ? "bg-white"
                          : "bg-[#0b0b0b]"
                        : darkMode
                          ? "bg-[#212121] border border-[#353535]"
                          : "bg-white border-2 border-[#ededed]"
                    }`}
                  >
                    {isCompleted ? (
                      <TickCircle 
                        size={28} 
                        variant="Bold" 
                        color={darkMode ? "#0b0b0b" : "#ffffff"} 
                      />
                    ) : (
                      <StepIcon
                        size={24}
                        variant="Bold"
                        color={
                          isActive 
                            ? darkMode ? "#0b0b0b" : "#ffffff"
                            : isUpcoming 
                              ? "#797979" 
                              : darkMode ? "#0b0b0b" : "#ffffff"
                        }
                      />
                    )}
                  </div>

                  {/* Step Info */}
                  <div className="mt-3 text-center">
                    <p
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? darkMode ? "text-white" : "text-[#0b0b0b]"
                          : isCompleted
                          ? darkMode ? "text-white" : "text-[#0b0b0b]"
                          : "text-[#797979]"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p
                      className={`text-xs mt-1 transition-colors ${
                        isActive 
                          ? darkMode ? "text-[#b9b9b9]" : "text-[#797979]"
                          : "text-[#797979]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Horizontal Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="flex-1 max-w-[120px] mb-12">
                    <div className={`relative h-0.5 w-full ${
                      darkMode ? 'bg-[#353535]' : 'bg-[#ededed]'
                    }`}>
                      <div
                        className={`absolute inset-0 ${
                          darkMode ? 'bg-white' : 'bg-[#0b0b0b]'
                        } transition-all duration-500 ${
                          currentStep > step.id ? "scale-x-100" : "scale-x-0"
                        } origin-left`}
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }

  // Vertical layout (left sidebar) - keeping for backwards compatibility
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8">
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;
          const isUpcoming = currentStep < step.id;

          return (
            <React.Fragment key={step.id}>
              <div className="flex items-start gap-4">
                {/* Icon Circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isActive
                      ? darkMode 
                        ? "bg-white shadow-lg shadow-white/20"
                        : "bg-[#0b0b0b] shadow-lg shadow-black/20"
                      : isCompleted
                      ? darkMode
                        ? "bg-white"
                        : "bg-[#0b0b0b]"
                      : darkMode
                        ? "bg-[#212121] border border-[#353535]"
                        : "bg-white border-2 border-[#ededed]"
                  }`}
                >
                  {isCompleted ? (
                    <TickCircle 
                      size={24} 
                      variant="Bold" 
                      color={darkMode ? "#0b0b0b" : "#ffffff"} 
                    />
                  ) : (
                    <StepIcon
                      size={20}
                      variant="Bold"
                      color={
                        isActive 
                          ? darkMode ? "#0b0b0b" : "#ffffff"
                          : isUpcoming 
                            ? "#797979" 
                            : darkMode ? "#0b0b0b" : "#ffffff"
                      }
                    />
                  )}
                </div>

                {/* Step Info */}
                <div className="flex-1 pt-1">
                  <p
                    className={`text-base font-medium transition-colors mb-1 ${
                      isActive
                        ? darkMode ? "text-white" : "text-[#0b0b0b]"
                        : isCompleted
                        ? darkMode ? "text-white" : "text-[#0b0b0b]"
                        : "text-[#797979]"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p
                    className={`text-sm transition-colors ${
                      isActive 
                        ? darkMode ? "text-[#b9b9b9]" : "text-[#797979]"
                        : "text-[#797979]"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Vertical Connector Line */}
              {idx < steps.length - 1 && (
                <div className="flex items-center gap-4 -my-4">
                  <div className="w-12 flex justify-center">
                    <div className={`w-0.5 h-8 ${
                      darkMode ? 'bg-[#353535]' : 'bg-[#ededed]'
                    } relative overflow-hidden`}>
                      <div
                        className={`absolute inset-0 ${
                          darkMode ? 'bg-white' : 'bg-[#0b0b0b]'
                        } transition-all duration-500 ${
                          currentStep > step.id ? "scale-y-100" : "scale-y-0"
                        } origin-top`}
                      />
                    </div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;

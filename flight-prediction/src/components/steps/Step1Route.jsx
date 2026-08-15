import React from "react";
import { Send2, Receive, ArrowRight } from "iconsax-react";
import OptionCard from "../ui/OptionCard";
import Button from "../ui/Button";
import { CITIES } from "../../constants/flightData";

const Step1Route = ({ formData, onChange, onNext, darkMode = true }) => {
  const canProceed = formData.source_city && formData.destination_city;

  return (
    <div className="space-y-12 animate-slideInLeft">
      {/* Header */}
      <div className="text-center">
        <div className="inline-block mb-4">
          <span className="text-[#797979] text-xs font-mono uppercase tracking-wide">
            STEP 1 • ROUTE SELECTION
          </span>
        </div>
        <h2 className={`text-4xl md:text-5xl font-normal mb-3 tracking-tight ${
          darkMode ? 'text-white' : 'text-[#0b0b0b]'
        }`}>
          Where are you flying?
        </h2>
        <p className={darkMode ? 'text-[#b9b9b9] text-lg' : 'text-[#797979] text-lg'}>
          Select your departure and arrival cities
        </p>
      </div>

      <div className="space-y-12">
        {/* Source City */}
        <div>
          <label className={`flex items-center gap-3 text-xl mb-6 font-medium ${
            darkMode ? 'text-white' : 'text-[#0b0b0b]'
          }`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
              darkMode ? 'bg-[#212121] border-[#353535]' : 'bg-white border-[#ededed]'
            }`}>
              <Send2 size={20} variant="Bold" color={darkMode ? "#b9b9b9" : "#797979"} />
            </div>
            <span>From which city?</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CITIES.map((city) => (
              <OptionCard
                key={`source-${city.value}`}
                option={city}
                isSelected={formData.source_city === city.value}
                onClick={() => onChange("source_city", city.value)}
                showIcon={true}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>

        {/* Destination City */}
        {formData.source_city && (
          <div className="animate-fadeIn">
            <label className={`flex items-center gap-3 text-xl mb-6 font-medium ${
              darkMode ? 'text-white' : 'text-[#0b0b0b]'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                darkMode ? 'bg-[#212121] border-[#353535]' : 'bg-white border-[#ededed]'
              }`}>
                <Receive size={20} variant="Bold" color={darkMode ? "#b9b9b9" : "#797979"} />
              </div>
              <span>To which city?</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {CITIES.map((city) => (
                <OptionCard
                  key={`dest-${city.value}`}
                  option={city}
                  isSelected={formData.destination_city === city.value}
                  onClick={() => onChange("destination_city", city.value)}
                  disabled={formData.source_city === city.value}
                  showIcon={true}
                  darkMode={darkMode}
                />
              ))}
            </div>
            {formData.destination_city === "" && (
              <div className="mt-4 flex items-start gap-2 text-[#797979] text-sm">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  darkMode ? 'bg-[#212121]' : 'bg-[#fafafa]'
                }`}>
                  <span className={darkMode ? 'text-white text-xs' : 'text-[#0b0b0b] text-xs'}>i</span>
                </div>
                <span>You cannot select the same city as your departure</span>
              </div>
            )}
          </div>
        )}
      </div>

      {canProceed && (
        <div className="flex justify-center pt-8 animate-scaleIn">
          <Button 
            onClick={onNext} 
            variant="brand" 
            darkMode={darkMode}
            icon={<ArrowRight variant="Bold" />}
          >
            Continue to Flight Details
          </Button>
        </div>
      )}
    </div>
  );
};

export default Step1Route;

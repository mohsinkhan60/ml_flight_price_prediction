import React from "react";
import OptionCard from "../ui/OptionCard";
import Button from "../ui/Button";
import { CITIES } from "../../constants/flightData";

const Step1Route = ({ formData, onChange, onNext }) => {
  const canProceed = formData.source_city && formData.destination_city;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-normal text-white mb-2">
          Where are you flying?
        </h2>
        <p className="text-[#b9b9b9] text-base">
          Select your departure and arrival cities
        </p>
      </div>

      <div className="space-y-8">
        {/* Source City */}
        <div>
          <label className="block text-white text-lg mb-4 font-medium flex items-center gap-2">
            <span className="text-2xl">🛫</span>
            From which city?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {CITIES.map((city) => (
              <OptionCard
                key={`source-${city.value}`}
                option={city}
                isSelected={formData.source_city === city.value}
                onClick={() => onChange("source_city", city.value)}
                showIcon={true}
              />
            ))}
          </div>
        </div>

        {/* Destination City */}
        {formData.source_city && (
          <div className="animate-fadeIn">
            <label className="block text-white text-lg mb-4 font-medium flex items-center gap-2">
              <span className="text-2xl">🛬</span>
              To which city?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {CITIES.map((city) => (
                <OptionCard
                  key={`dest-${city.value}`}
                  option={city}
                  isSelected={formData.destination_city === city.value}
                  onClick={() => onChange("destination_city", city.value)}
                  disabled={formData.source_city === city.value}
                  showIcon={true}
                />
              ))}
            </div>
            {formData.destination_city === "" && (
              <p className="text-[#797979] text-sm mt-3 ml-1">
                💡 You cannot select the same city as your departure
              </p>
            )}
          </div>
        )}
      </div>

      {canProceed && (
        <div className="animate-fadeIn">
          <Button onClick={onNext} variant="primary">
            Continue to Flight Details →
          </Button>
        </div>
      )}
    </div>
  );
};

export default Step1Route;

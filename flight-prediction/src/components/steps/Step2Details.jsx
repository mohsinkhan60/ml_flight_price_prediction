import React from "react";
import OptionCard from "../ui/OptionCard";
import Button from "../ui/Button";
import { AIRLINES, TRAVEL_CLASSES, STOPS, DEPARTURE_TIMES, ARRIVAL_TIMES } from "../../constants/flightData";

const Step2Details = ({ formData, onChange, onNext, onBack }) => {
  const canProceed =
    formData.airline &&
    formData.class &&
    formData.stops &&
    formData.departure_time &&
    formData.arrival_time;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-normal text-white mb-2">
          Choose your flight preferences
        </h2>
        <p className="text-[#b9b9b9] text-base">
          {formData.source_city} → {formData.destination_city}
        </p>
      </div>

      <div className="space-y-8">
        {/* Airline */}
        <div>
          <label className="block text-white text-lg mb-4 font-medium flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            Which airline do you prefer?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {AIRLINES.map((airline) => (
              <OptionCard
                key={airline.value}
                option={airline}
                isSelected={formData.airline === airline.value}
                onClick={() => onChange("airline", airline.value)}
                showIcon={true}
              />
            ))}
          </div>
        </div>

        {/* Class */}
        {formData.airline && (
          <div className="animate-fadeIn">
            <label className="block text-white text-lg mb-4 font-medium flex items-center gap-2">
              <span className="text-2xl">💺</span>
              What class would you like to travel?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {TRAVEL_CLASSES.map((cls) => (
                <OptionCard
                  key={cls.value}
                  option={cls}
                  isSelected={formData.class === cls.value}
                  onClick={() => onChange("class", cls.value)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Stops */}
        {formData.class && (
          <div className="animate-fadeIn">
            <label className="block text-white text-lg mb-4 font-medium flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              How many stops are acceptable?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {STOPS.map((stop) => (
                <OptionCard
                  key={stop.value}
                  option={stop}
                  isSelected={formData.stops === stop.value}
                  onClick={() => onChange("stops", stop.value)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Departure Time */}
        {formData.stops && (
          <div className="animate-fadeIn">
            <label className="block text-white text-lg mb-4 font-medium flex items-center gap-2">
              <span className="text-2xl">🕐</span>
              When do you want to depart?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {DEPARTURE_TIMES.map((time) => (
                <OptionCard
                  key={`dep-${time.value}`}
                  option={time}
                  isSelected={formData.departure_time === time.value}
                  onClick={() => onChange("departure_time", time.value)}
                  showIcon={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Arrival Time */}
        {formData.departure_time && (
          <div className="animate-fadeIn">
            <label className="block text-white text-lg mb-4 font-medium flex items-center gap-2">
              <span className="text-2xl">🕐</span>
              When would you like to arrive?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {ARRIVAL_TIMES.map((time) => (
                <OptionCard
                  key={`arr-${time.value}`}
                  option={time}
                  isSelected={formData.arrival_time === time.value}
                  onClick={() => onChange("arrival_time", time.value)}
                  showIcon={true}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {canProceed && (
        <div className="flex gap-3 animate-fadeIn">
          <Button onClick={onBack} variant="secondary">
            ← Back
          </Button>
          <Button onClick={onNext} variant="primary">
            Continue to Date Selection →
          </Button>
        </div>
      )}
    </div>
  );
};

export default Step2Details;

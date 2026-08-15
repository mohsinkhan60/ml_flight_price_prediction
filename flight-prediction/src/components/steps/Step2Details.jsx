import React, { useEffect, useRef } from "react";
import { Airplane, Medal, Repeat, Clock, ArrowRight, ArrowLeft } from "iconsax-react";
import OptionCard from "../ui/OptionCard";
import Button from "../ui/Button";
import { AIRLINES, TRAVEL_CLASSES, STOPS, DEPARTURE_TIMES, ARRIVAL_TIMES } from "../../constants/flightData";

const Step2Details = ({ formData, onChange, onNext, onBack, darkMode = true }) => {
  const canProceed =
    formData.airline &&
    formData.class &&
    formData.stops &&
    formData.departure_time &&
    formData.arrival_time;

  const classRef = useRef(null);
  const stopsRef = useRef(null);
  const departureRef = useRef(null);
  const arrivalRef = useRef(null);

  // Scroll when airline is selected
  useEffect(() => {
    if (formData.airline && classRef.current) {
      setTimeout(() => {
        classRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [formData.airline]);

  // Scroll when class is selected
  useEffect(() => {
    if (formData.class && stopsRef.current) {
      setTimeout(() => {
        stopsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [formData.class]);

  // Scroll when stops is selected
  useEffect(() => {
    if (formData.stops && departureRef.current) {
      setTimeout(() => {
        departureRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [formData.stops]);

  // Scroll when departure time is selected
  useEffect(() => {
    if (formData.departure_time && arrivalRef.current) {
      setTimeout(() => {
        arrivalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [formData.departure_time]);

  return (
    <div className="space-y-12 animate-slideInRight">
      {/* Header */}
      <div className="text-center">
        <div className="inline-block mb-4">
          <span className="text-[#797979] text-xs font-mono uppercase tracking-wide">
            STEP 2 • FLIGHT PREFERENCES
          </span>
        </div>
        <h2 className={`text-4xl md:text-5xl font-normal mb-3 tracking-tight ${
          darkMode ? 'text-white' : 'text-[#0b0b0b]'
        }`}>
          Choose your preferences
        </h2>
        <p className={darkMode ? 'text-[#b9b9b9] text-lg' : 'text-[#797979] text-lg'}>
          {formData.source_city} → {formData.destination_city}
        </p>
      </div>

      <div className="space-y-10">
        {/* Airline */}
        <div>
          <label className={`flex items-center gap-3 text-xl mb-6 font-medium ${
            darkMode ? 'text-white' : 'text-[#0b0b0b]'
          }`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
              darkMode ? 'bg-[#212121] border-[#353535]' : 'bg-white border-[#ededed]'
            }`}>
              <Airplane size={20} variant="Bold" color={darkMode ? "#b9b9b9" : "#797979"} />
            </div>
            <span>Which airline do you prefer?</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {AIRLINES.map((airline) => (
              <OptionCard
                key={airline.value}
                option={airline}
                isSelected={formData.airline === airline.value}
                onClick={() => onChange("airline", airline.value)}
                showIcon={true}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>

        {/* Class */}
        {formData.airline && (
          <div className="animate-fadeIn" ref={classRef}>
            <label className={`flex items-center gap-3 text-xl mb-6 font-medium ${
              darkMode ? 'text-white' : 'text-[#0b0b0b]'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                darkMode ? 'bg-[#212121] border-[#353535]' : 'bg-white border-[#ededed]'
              }`}>
                <Medal size={20} variant="Bold" color={darkMode ? "#b9b9b9" : "#797979"} />
              </div>
              <span>What class would you like to travel?</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TRAVEL_CLASSES.map((cls) => (
                <OptionCard
                  key={cls.value}
                  option={cls}
                  isSelected={formData.class === cls.value}
                  onClick={() => onChange("class", cls.value)}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        )}

        {/* Stops */}
        {formData.class && (
          <div className="animate-fadeIn" ref={stopsRef}>
            <label className={`flex items-center gap-3 text-xl mb-6 font-medium ${
              darkMode ? 'text-white' : 'text-[#0b0b0b]'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                darkMode ? 'bg-[#212121] border-[#353535]' : 'bg-white border-[#ededed]'
              }`}>
                <Repeat size={20} variant="Bold" color={darkMode ? "#b9b9b9" : "#797979"} />
              </div>
              <span>How many stops are acceptable?</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STOPS.map((stop) => (
                <OptionCard
                  key={stop.value}
                  option={stop}
                  isSelected={formData.stops === stop.value}
                  onClick={() => onChange("stops", stop.value)}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        )}

        {/* Departure Time */}
        {formData.stops && (
          <div className="animate-fadeIn" ref={departureRef}>
            <label className={`flex items-center gap-3 text-xl mb-6 font-medium ${
              darkMode ? 'text-white' : 'text-[#0b0b0b]'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                darkMode ? 'bg-[#212121] border-[#353535]' : 'bg-white border-[#ededed]'
              }`}>
                <Clock size={20} variant="Bold" color={darkMode ? "#b9b9b9" : "#797979"} />
              </div>
              <span>When do you want to depart?</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {DEPARTURE_TIMES.map((time) => (
                <OptionCard
                  key={`dep-${time.value}`}
                  option={time}
                  isSelected={formData.departure_time === time.value}
                  onClick={() => onChange("departure_time", time.value)}
                  showIcon={true}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        )}

        {/* Arrival Time */}
        {formData.departure_time && (
          <div className="animate-fadeIn" ref={arrivalRef}>
            <label className={`flex items-center gap-3 text-xl mb-6 font-medium ${
              darkMode ? 'text-white' : 'text-[#0b0b0b]'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                darkMode ? 'bg-[#212121] border-[#353535]' : 'bg-white border-[#ededed]'
              }`}>
                <Clock size={20} variant="Bold" color={darkMode ? "#b9b9b9" : "#797979"} />
              </div>
              <span>When would you like to arrive?</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {ARRIVAL_TIMES.map((time) => (
                <OptionCard
                  key={`arr-${time.value}`}
                  option={time}
                  isSelected={formData.arrival_time === time.value}
                  onClick={() => onChange("arrival_time", time.value)}
                  showIcon={true}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {canProceed && (
        <div className="flex gap-4 justify-center pt-8 animate-scaleIn">
          <Button 
            onClick={onBack} 
            variant="secondary" 
            fullWidth={false}
            darkMode={darkMode}
            icon={<ArrowLeft variant="Bold" />}
          >
            Back
          </Button>
          <Button 
            onClick={onNext} 
            variant="brand" 
            fullWidth={false}
            darkMode={darkMode}
            icon={<ArrowRight variant="Bold" />}
          >
            Continue to Date Selection
          </Button>
        </div>
      )}
    </div>
  );
};

export default Step2Details;

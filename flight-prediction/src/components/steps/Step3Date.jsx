import React from "react";
import { Calendar, Notepad, InfoCircle, ArrowLeft, Flash } from "iconsax-react";
import Button from "../ui/Button";

const Step3Date = ({ formData, onChange, onSubmit, onBack, loading, darkMode = true }) => {
  const today = new Date().toISOString().split("T")[0];
  const canSubmit = formData.departure_date;

  const getStopLabel = (stop) => {
    switch (stop) {
      case "zero":
        return "Non-stop";
      case "one":
        return "1 Stop";
      case "two_or_more":
        return "2+ Stops";
      default:
        return stop;
    }
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Header */}
      <div className="text-center">
        <div className="inline-block mb-4">
          <span className="text-[#797979] text-xs font-mono uppercase tracking-wide">
            STEP 3 • DEPARTURE DATE
          </span>
        </div>
        <h2 className={`text-4xl md:text-5xl font-normal mb-3 tracking-tight ${
          darkMode ? 'text-white' : 'text-[#0b0b0b]'
        }`}>
          When do you want to fly?
        </h2>
        <p className={darkMode ? 'text-[#b9b9b9] text-lg' : 'text-[#797979] text-lg'}>
          Select your departure date to get the price prediction
        </p>
      </div>

      <div className="space-y-10">
        {/* Date Picker */}
        <div>
          <label 
            htmlFor="departure_date"
            className={`flex items-center gap-3 text-xl mb-6 font-medium cursor-pointer ${
              darkMode ? 'text-white' : 'text-[#0b0b0b]'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
              darkMode ? 'bg-[#212121] border-[#353535]' : 'bg-white border-[#ededed]'
            }`}>
              <Calendar size={20} variant="Bold" color={darkMode ? "#b9b9b9" : "#797979"} />
            </div>
            <span>What is your departure date?</span>
          </label>
          <div className="relative">
            <input
              id="departure_date"
              type="date"
              name="departure_date"
              min={today}
              value={formData.departure_date}
              onChange={(e) => onChange("departure_date", e.target.value)}
              onClick={(e) => {
                // Force calendar to open on click
                try {
                  e.target.showPicker();
                } catch (err) {
                  // Fallback for browsers that don't support showPicker
                  e.target.focus();
                }
              }}
              className={`w-full text-lg py-5 px-6 rounded-lg border-2 transition-all cursor-pointer ${
                darkMode
                  ? 'bg-[#0b0b0b] text-white border-[#353535] hover:border-[#505b6c] focus:border-white'
                  : 'bg-white text-[#0b0b0b] border-[#ededed] hover:border-[#0b0b0b] focus:border-[#0b0b0b]'
              } focus:outline-none`}
              style={{
                colorScheme: darkMode ? 'dark' : 'light'
              }}
            />
          </div>
          <div className="mt-4 flex items-start gap-2 text-[#797979] text-sm">
            <InfoCircle size={20} variant="Bold" color="#797979" className="flex-shrink-0 mt-0.5" />
            <span>You can select any date from today onwards</span>
          </div>
        </div>

        {/* Trip Summary */}
        {formData.departure_date && (
          <div className={`rounded-xl p-8 border animate-scaleIn ${
            darkMode ? 'bg-[#212121] border-[#353535]' : 'bg-[#fafafa] border-[#ededed]'
          }`}>
            <h3 className={`font-medium text-xl mb-6 flex items-center gap-3 ${
              darkMode ? 'text-white' : 'text-[#0b0b0b]'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                darkMode ? 'bg-[#0b0b0b] border-[#353535]' : 'bg-white border-[#ededed]'
              }`}>
                <Notepad size={20} variant="Bold" color={darkMode ? "#b9b9b9" : "#797979"} />
              </div>
              <span>Your Trip Summary</span>
            </h3>
            <div className="space-y-4">
              <div className={`flex justify-between items-center py-3 border-b ${
                darkMode ? 'border-[#353535]' : 'border-[#ededed]'
              }`}>
                <span className="text-[#797979] text-base">Route</span>
                <span className={`font-medium text-base ${
                  darkMode ? 'text-white' : 'text-[#0b0b0b]'
                }`}>
                  {formData.source_city} → {formData.destination_city}
                </span>
              </div>
              <div className={`flex justify-between items-center py-3 border-b ${
                darkMode ? 'border-[#353535]' : 'border-[#ededed]'
              }`}>
                <span className="text-[#797979] text-base">Airline</span>
                <span className={`font-medium text-base ${
                  darkMode ? 'text-white' : 'text-[#0b0b0b]'
                }`}>
                  {formData.airline.replace("_", " ")}
                </span>
              </div>
              <div className={`flex justify-between items-center py-3 border-b ${
                darkMode ? 'border-[#353535]' : 'border-[#ededed]'
              }`}>
                <span className="text-[#797979] text-base">Class</span>
                <span className={`font-medium text-base ${
                  darkMode ? 'text-white' : 'text-[#0b0b0b]'
                }`}>{formData.class}</span>
              </div>
              <div className={`flex justify-between items-center py-3 border-b ${
                darkMode ? 'border-[#353535]' : 'border-[#ededed]'
              }`}>
                <span className="text-[#797979] text-base">Stops</span>
                <span className={`font-medium text-base ${
                  darkMode ? 'text-white' : 'text-[#0b0b0b]'
                }`}>
                  {getStopLabel(formData.stops)}
                </span>
              </div>
              <div className={`flex justify-between items-center py-3 border-b ${
                darkMode ? 'border-[#353535]' : 'border-[#ededed]'
              }`}>
                <span className="text-[#797979] text-base">Departure</span>
                <span className={`font-medium text-base ${
                  darkMode ? 'text-white' : 'text-[#0b0b0b]'
                }`}>
                  {formData.departure_time.replace("_", " ")}
                </span>
              </div>
              <div className={`flex justify-between items-center py-3 border-b ${
                darkMode ? 'border-[#353535]' : 'border-[#ededed]'
              }`}>
                <span className="text-[#797979] text-base">Arrival</span>
                <span className={`font-medium text-base ${
                  darkMode ? 'text-white' : 'text-[#0b0b0b]'
                }`}>
                  {formData.arrival_time.replace("_", " ")}
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-[#797979] text-base">Date</span>
                <span className={`font-medium text-base ${
                  darkMode ? 'text-white' : 'text-[#0b0b0b]'
                }`}>
                  {new Date(formData.departure_date).toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4 justify-center pt-8">
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
          onClick={onSubmit}
          variant="brand"
          disabled={!canSubmit || loading}
          loading={loading}
          fullWidth={false}
          darkMode={darkMode}
          icon={!loading ? <Flash variant="Bold" /> : null}
        >
          Get Price Prediction
        </Button>
      </div>
    </div>
  );
};

export default Step3Date;

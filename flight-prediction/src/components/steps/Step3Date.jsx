import React from "react";
import Button from "../ui/Button";

const Step3Date = ({ formData, onChange, onSubmit, onBack, loading }) => {
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
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-normal text-white mb-2">
          When do you want to fly?
        </h2>
        <p className="text-[#b9b9b9] text-base">
          Select your departure date to get the price prediction
        </p>
      </div>

      <div className="space-y-6">
        {/* Date Picker */}
        <div>
          <label 
            htmlFor="departure_date"
            className="block text-white text-lg mb-4 font-medium flex items-center gap-2 cursor-pointer"
          >
            <span className="text-2xl">📅</span>
            What is your departure date?
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
              className="w-full bg-[#0b0b0b] text-white text-lg py-4 px-5 rounded-lg border-2 border-[#353535] focus:outline-none focus:border-white transition-all cursor-pointer hover:border-[#505b6c]"
              style={{
                colorScheme: 'dark'
              }}
            />
          </div>
          <p className="text-[#797979] text-sm mt-3 ml-1">
            💡 You can select any date from today onwards
          </p>
        </div>

        {/* Trip Summary */}
        {formData.departure_date && (
          <div className="bg-[#0b0b0b] rounded-xl p-6 border-2 border-[#353535] animate-fadeIn">
            <h3 className="text-white font-medium text-lg mb-5 flex items-center gap-2">
              <span className="text-xl">📋</span>
              Your Trip Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-[#353535]">
                <span className="text-[#797979] text-sm">Route</span>
                <span className="text-white font-medium">
                  {formData.source_city} → {formData.destination_city}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#353535]">
                <span className="text-[#797979] text-sm">Airline</span>
                <span className="text-white font-medium">
                  {formData.airline.replace("_", " ")}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#353535]">
                <span className="text-[#797979] text-sm">Class</span>
                <span className="text-white font-medium">{formData.class}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#353535]">
                <span className="text-[#797979] text-sm">Stops</span>
                <span className="text-white font-medium">
                  {getStopLabel(formData.stops)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#353535]">
                <span className="text-[#797979] text-sm">Departure</span>
                <span className="text-white font-medium">
                  {formData.departure_time.replace("_", " ")}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#353535]">
                <span className="text-[#797979] text-sm">Arrival</span>
                <span className="text-white font-medium">
                  {formData.arrival_time.replace("_", " ")}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-[#797979] text-sm">Date</span>
                <span className="text-white font-medium">
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

      <div className="flex gap-3">
        <Button onClick={onBack} variant="secondary">
          ← Back
        </Button>
        <Button
          onClick={onSubmit}
          variant="brand"
          disabled={!canSubmit || loading}
          loading={loading}
        >
          Get Price Prediction 💰
        </Button>
      </div>
    </div>
  );
};

export default Step3Date;

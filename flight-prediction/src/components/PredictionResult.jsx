import React from "react";
import Button from "./ui/Button";

const PredictionResult = ({ prediction, onReset, formData }) => {
  return (
    <div className="mt-8 animate-fadeIn">
      {/* Success Result */}
      <div className="bg-[#212121] rounded-xl p-8 w-full max-w-2xl border-2 border-[#37cd84] mx-auto">
        <div className="text-center">
          <div className="inline-block mb-4">
            <span className="text-[#37cd84] text-xs font-mono uppercase tracking-wide">
              ✓ PREDICTED PRICE
            </span>
          </div>
          <div className="text-6xl md:text-7xl font-normal text-white mb-2">
            ₹{prediction.toLocaleString("en-IN")}
          </div>
          <p className="text-[#b9b9b9] text-base mb-8">
            Based on historical data and current market trends
          </p>

          {/* Flight Summary Card */}
          <div className="bg-[#0b0b0b] rounded-lg p-6 border border-[#353535] mb-6 text-left">
            <h4 className="text-white font-medium mb-4 text-center">Flight Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#797979]">Route</span>
                <span className="text-white">
                  {formData.source_city} → {formData.destination_city}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#797979]">Date</span>
                <span className="text-white">
                  {new Date(formData.departure_date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#797979]">Airline</span>
                <span className="text-white">{formData.airline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#797979]">Class</span>
                <span className="text-white">{formData.class}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={onReset} variant="secondary" fullWidth={false}>
              🔄 Search Another Flight
            </Button>
            <Button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Flight Price Prediction",
                    text: `Predicted price for ${formData.source_city} to ${formData.destination_city}: ₹${prediction.toLocaleString("en-IN")}`,
                  });
                }
              }}
              variant="primary"
              fullWidth={false}
            >
              📤 Share Result
            </Button>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-6 bg-[#212121] rounded-lg p-6 border border-[#353535] max-w-2xl mx-auto">
        <h4 className="text-white font-medium mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span>
          Price Tips
        </h4>
        <ul className="space-y-2 text-sm text-[#b9b9b9]">
          <li className="flex items-start gap-2">
            <span className="text-[#37cd84] mt-1">•</span>
            <span>Booking 3-4 weeks in advance typically offers the best prices</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#37cd84] mt-1">•</span>
            <span>Flights on Tuesday and Wednesday are usually cheaper</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#37cd84] mt-1">•</span>
            <span>Early morning and late night flights tend to be more affordable</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PredictionResult;

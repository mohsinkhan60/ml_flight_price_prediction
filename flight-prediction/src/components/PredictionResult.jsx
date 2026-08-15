import React from "react";
import { TickCircle, ArrowRotateLeft, Share, Lamp, Calendar, Airplane, Location } from "iconsax-react";
import Button from "./ui/Button";

const PredictionResult = ({ prediction, onReset, formData, darkMode = true }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-scaleIn">
      {/* Success Result */}
      <div className={`rounded-2xl p-10 md:p-12 border-2 ${
        darkMode 
          ? 'bg-[#212121] border-[#37cd84]'
          : 'bg-white border-[#37cd84]'
      }`}>
        <div className="text-center">
          <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border ${
            darkMode
              ? 'bg-[#37cd84]/10 border-[#37cd84]'
              : 'bg-[#37cd84]/10 border-[#37cd84]'
          }`}>
            <TickCircle size={16} variant="Bold" color="#37cd84" />
            <span className="text-[#37cd84] text-xs font-mono uppercase tracking-wide">
              PREDICTED PRICE
            </span>
          </div>
          <div className={`text-7xl md:text-8xl font-normal mb-4 tracking-tight ${
            darkMode ? 'text-white' : 'text-[#0b0b0b]'
          }`}>
            ₹{prediction.toLocaleString("en-IN")}
          </div>
          <p className={darkMode ? 'text-[#b9b9b9] text-lg mb-10' : 'text-[#797979] text-lg mb-10'}>
            Based on historical data and current market trends
          </p>

          {/* Flight Summary Card */}
          <div className={`rounded-xl p-8 border mb-8 text-left ${
            darkMode 
              ? 'bg-[#0b0b0b] border-[#353535]'
              : 'bg-[#fafafa] border-[#ededed]'
          }`}>
            <h4 className={`font-medium text-xl mb-6 text-center flex items-center justify-center gap-3 ${
              darkMode ? 'text-white' : 'text-[#0b0b0b]'
            }`}>
              <Airplane size={24} variant="Bold" color={darkMode ? "#ffffff" : "#0b0b0b"} />
              <span>Flight Details</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Location size={20} variant="Bold" color="#797979" />
                  <div className="flex-1">
                    <div className="text-[#797979] text-sm mb-1">Route</div>
                    <div className={`font-medium text-base ${
                      darkMode ? 'text-white' : 'text-[#0b0b0b]'
                    }`}>
                      {formData.source_city} → {formData.destination_city}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={20} variant="Bold" color="#797979" />
                  <div className="flex-1">
                    <div className="text-[#797979] text-sm mb-1">Date</div>
                    <div className={`font-medium text-base ${
                      darkMode ? 'text-white' : 'text-[#0b0b0b]'
                    }`}>
                      {new Date(formData.departure_date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Airplane size={20} variant="Bold" color="#797979" />
                  <div className="flex-1">
                    <div className="text-[#797979] text-sm mb-1">Airline</div>
                    <div className={`font-medium text-base ${
                      darkMode ? 'text-white' : 'text-[#0b0b0b]'
                    }`}>
                      {formData.airline.replace("_", " ")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TickCircle size={20} variant="Bold" color="#797979" />
                  <div className="flex-1">
                    <div className="text-[#797979] text-sm mb-1">Class</div>
                    <div className={`font-medium text-base ${
                      darkMode ? 'text-white' : 'text-[#0b0b0b]'
                    }`}>{formData.class}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onReset} 
              variant="secondary" 
              fullWidth={false}
              darkMode={darkMode}
              icon={<ArrowRotateLeft variant="Bold" />}
            >
              Search Another Flight
            </Button>
            <Button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "FlightFare AI - Price Prediction",
                    text: `Predicted price for ${formData.source_city} to ${formData.destination_city}: ₹${prediction.toLocaleString("en-IN")}`,
                  });
                }
              }}
              variant="primary"
              fullWidth={false}
              darkMode={darkMode}
              icon={<Share variant="Bold" />}
            >
              Share Result
            </Button>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className={`mt-8 rounded-xl p-8 border ${
        darkMode
          ? 'bg-[#212121] border-[#353535]'
          : 'bg-white border-[#ededed]'
      }`}>
        <h4 className={`font-medium text-xl mb-6 flex items-center gap-3 ${
          darkMode ? 'text-white' : 'text-[#0b0b0b]'
        }`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
            darkMode ? 'bg-[#0b0b0b] border-[#353535]' : 'bg-[#fafafa] border-[#ededed]'
          }`}>
            <Lamp size={20} variant="Bold" color={darkMode ? "#ffffff" : "#0b0b0b"} />
          </div>
          <span>Price Tips</span>
        </h4>
        <ul className={`space-y-4 text-base ${
          darkMode ? 'text-[#b9b9b9]' : 'text-[#797979]'
        }`}>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#37cd84] mt-2 flex-shrink-0" />
            <span>Booking 3-4 weeks in advance typically offers the best prices</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#37cd84] mt-2 flex-shrink-0" />
            <span>Flights on Tuesday and Wednesday are usually cheaper</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#37cd84] mt-2 flex-shrink-0" />
            <span>Early morning and late night flights tend to be more affordable</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PredictionResult;

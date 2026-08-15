import React from "react";

const OptionCard = ({ option, isSelected, onClick, disabled = false, showIcon = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`py-4 px-4 rounded-lg text-sm font-medium transition-all text-left ${
        isSelected
          ? "bg-white text-[#0b0b0b] shadow-md transform scale-[1.02]"
          : disabled
          ? "bg-[#0b0b0b] text-[#353535] border border-[#353535] cursor-not-allowed opacity-50"
          : "bg-[#0b0b0b] text-[#b9b9b9] border border-[#353535] hover:border-[#505b6c] hover:bg-[#151515]"
      }`}
    >
      <div className="flex items-start gap-3">
        {showIcon && option.icon && (
          <span className="text-2xl flex-shrink-0">{option.icon}</span>
        )}
        {showIcon && option.logo && (
          <span className="text-2xl flex-shrink-0">{option.logo}</span>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-semibold">{option.label}</div>
          {option.description && (
            <div className={`text-xs mt-1 ${isSelected ? 'text-[#353535]' : 'text-[#797979]'}`}>
              {option.description}
            </div>
          )}
          {option.time && (
            <div className={`text-xs mt-1 ${isSelected ? 'text-[#353535]' : 'text-[#797979]'}`}>
              {option.time}
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default OptionCard;

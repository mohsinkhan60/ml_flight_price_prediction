import React from "react";

const OptionCard = ({ option, isSelected, onClick, disabled = false, showIcon = false, darkMode = true }) => {
  // Get the icon component
  const IconComponent = option.icon || option.logo;
  
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`py-4 px-4 rounded-lg text-sm font-medium transition-all text-left ${
        isSelected
          ? darkMode
            ? "bg-white text-[#0b0b0b] shadow-md transform scale-[1.02]"
            : "bg-[#0b0b0b] text-white shadow-md transform scale-[1.02]"
          : disabled
          ? darkMode
            ? "bg-[#0b0b0b] text-[#353535] border border-[#353535] cursor-not-allowed opacity-50"
            : "bg-[#fafafa] text-[#b9b9b9] border border-[#ededed] cursor-not-allowed opacity-50"
          : darkMode
            ? "bg-[#0b0b0b] text-[#b9b9b9] border border-[#353535] hover:border-[#505b6c] hover:bg-[#151515]"
            : "bg-white text-[#797979] border-2 border-[#ededed] hover:border-[#0b0b0b] hover:bg-[#fafafa]"
      }`}
    >
      <div className="flex items-start gap-3">
        {showIcon && IconComponent && (
          <div className="flex-shrink-0">
            <IconComponent 
              size={24} 
              variant="Bold"
              color={
                isSelected 
                  ? darkMode ? "#0b0b0b" : "#ffffff"
                  : darkMode ? "#b9b9b9" : "#797979"
              }
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-semibold">{option.label}</div>
          {option.description && (
            <div className={`text-xs mt-1 ${
              isSelected 
                ? darkMode ? 'text-[#353535]' : 'text-[#b9b9b9]'
                : 'text-[#797979]'
            }`}>
              {option.description}
            </div>
          )}
          {option.time && (
            <div className={`text-xs mt-1 ${
              isSelected 
                ? darkMode ? 'text-[#353535]' : 'text-[#b9b9b9]'
                : 'text-[#797979]'
            }`}>
              {option.time}
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default OptionCard;

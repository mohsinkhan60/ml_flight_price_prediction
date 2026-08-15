import React from "react";

const Button = ({ 
  children, 
  onClick, 
  disabled = false, 
  variant = "primary", 
  type = "button",
  fullWidth = true,
  loading = false,
  darkMode = true,
  icon = null
}) => {
  const baseClasses = "py-3 px-6 rounded-full text-base font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: darkMode
      ? `bg-white text-[#0b0b0b] hover:bg-[#ededed] focus:ring-white focus:ring-offset-[#0b0b0b] ${
          disabled ? "opacity-30 cursor-not-allowed" : ""
        }`
      : `bg-[#0b0b0b] text-white hover:bg-[#212121] focus:ring-[#0b0b0b] focus:ring-offset-white ${
          disabled ? "opacity-30 cursor-not-allowed" : ""
        }`,
    secondary: darkMode
      ? `bg-[#0b0b0b] text-[#b9b9b9] border border-[#353535] hover:border-[#505b6c] hover:bg-[#151515] focus:ring-[#505b6c] focus:ring-offset-[#0b0b0b] ${
          disabled ? "opacity-30 cursor-not-allowed" : ""
        }`
      : `bg-white text-[#797979] border-2 border-[#ededed] hover:border-[#0b0b0b] hover:text-[#0b0b0b] focus:ring-[#ededed] focus:ring-offset-white ${
          disabled ? "opacity-30 cursor-not-allowed" : ""
        }`,
    brand: darkMode
      ? `bg-white text-[#0b0b0b] hover:bg-[#ededed] focus:ring-white focus:ring-offset-[#0b0b0b] ${
          disabled ? "opacity-30 cursor-not-allowed" : ""
        }`
      : `bg-[#0b0b0b] text-white hover:bg-[#212121] focus:ring-[#0b0b0b] focus:ring-offset-white ${
          disabled ? "opacity-30 cursor-not-allowed" : ""
        }`
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? "w-full" : ""} flex items-center justify-center gap-2`}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Processing...</span>
        </>
      ) : (
        <>
          {icon && (
            <span className="flex-shrink-0 inline-flex">
              {React.cloneElement(icon, {
                color: 'currentColor',
                className: 'w-5 h-5'
              })}
            </span>
          )}
          <span>{children}</span>
        </>
      )}
    </button>
  );
};

export default Button;

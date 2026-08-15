// Flight data constants
export const CITIES = [
  { value: "Delhi", label: "Delhi", icon: "🏛️" },
  { value: "Mumbai", label: "Mumbai", icon: "🌊" },
  { value: "Bangalore", label: "Bangalore", icon: "🌳" },
  { value: "Kolkata", label: "Kolkata", icon: "🎭" },
  { value: "Hyderabad", label: "Hyderabad", icon: "🏰" },
  { value: "Chennai", label: "Chennai", icon: "🏖️" }
];

export const AIRLINES = [
  { value: "SpiceJet", label: "SpiceJet", logo: "🌶️" },
  { value: "AirAsia", label: "AirAsia", logo: "✈️" },
  { value: "Vistara", label: "Vistara", logo: "⭐" },
  { value: "GO_FIRST", label: "GO FIRST", logo: "🚀" },
  { value: "Indigo", label: "Indigo", logo: "🔵" },
  { value: "Air_India", label: "Air India", logo: "🇮🇳" }
];

export const TRAVEL_CLASSES = [
  { value: "Economy", label: "Economy", description: "Standard seating with basic amenities" },
  { value: "Business", label: "Business", description: "Premium seating with extra legroom" }
];

export const STOPS = [
  { value: "zero", label: "Non-stop", description: "Direct flight" },
  { value: "one", label: "1 Stop", description: "One stopover" },
  { value: "two_or_more", label: "2+ Stops", description: "Multiple stopovers" }
];

export const DEPARTURE_TIMES = [
  { value: "Early_Morning", label: "Early Morning", time: "12 AM - 6 AM", icon: "🌅" },
  { value: "Morning", label: "Morning", time: "6 AM - 12 PM", icon: "☀️" },
  { value: "Afternoon", label: "Afternoon", time: "12 PM - 4 PM", icon: "🌤️" },
  { value: "Evening", label: "Evening", time: "4 PM - 8 PM", icon: "🌆" },
  { value: "Night", label: "Night", time: "8 PM - 12 AM", icon: "🌙" },
  { value: "Late_Night", label: "Late Night", time: "12 AM - 4 AM", icon: "🌃" }
];

export const ARRIVAL_TIMES = DEPARTURE_TIMES;

export const STEPS = [
  { id: 1, title: "Route", description: "Where are you traveling?" },
  { id: 2, title: "Details", description: "Choose your preferences" },
  { id: 3, title: "Date", description: "When do you want to fly?" }
];

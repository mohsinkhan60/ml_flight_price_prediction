import { 
  Building, 
  Ship, 
  Tree, 
  Mask,
  Crown,
  Home,
  Airplane,
  Star1,
  Flash,
  Record,
  Flag,
  Sun1,
  CloudSunny,
  Moon,
  Clock,
  TickCircle,
  Location,
  Calendar,
  Notepad2
} from 'iconsax-react';

// Flight data constants
export const CITIES = [
  { value: "Delhi", label: "Delhi", icon: Building },
  { value: "Mumbai", label: "Mumbai", icon: Ship },
  { value: "Bangalore", label: "Bangalore", icon: Tree },
  { value: "Kolkata", label: "Kolkata", icon: Mask },
  { value: "Hyderabad", label: "Hyderabad", icon: Crown },
  { value: "Chennai", label: "Chennai", icon: Home }
];

export const AIRLINES = [
  { value: "SpiceJet", label: "SpiceJet", logo: Flash },
  { value: "AirAsia", label: "AirAsia", logo: Airplane },
  { value: "Vistara", label: "Vistara", logo: Star1 },
  { value: "GO_FIRST", label: "GO FIRST", logo: Flash },
  { value: "Indigo", label: "Indigo", logo: Record },
  { value: "Air_India", label: "Air India", logo: Flag }
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
  { value: "Early_Morning", label: "Early Morning", time: "12 AM - 6 AM", icon: Moon },
  { value: "Morning", label: "Morning", time: "6 AM - 12 PM", icon: Sun1 },
  { value: "Afternoon", label: "Afternoon", time: "12 PM - 4 PM", icon: Sun1 },
  { value: "Evening", label: "Evening", time: "4 PM - 8 PM", icon: CloudSunny },
  { value: "Night", label: "Night", time: "8 PM - 12 AM", icon: Moon },
  { value: "Late_Night", label: "Late Night", time: "12 AM - 4 AM", icon: Moon }
];

export const ARRIVAL_TIMES = DEPARTURE_TIMES;

export const STEPS = [
  { id: 1, title: "Route", description: "Where are you traveling?", icon: Location },
  { id: 2, title: "Details", description: "Choose your preferences", icon: Notepad2 },
  { id: 3, title: "Date", description: "When do you want to fly?", icon: Calendar }
];

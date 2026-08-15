# Flight Price Prediction - Project Structure

## 📁 Folder Structure

```
src/
├── components/           # Reusable UI components
│   ├── steps/           # Step-by-step form components
│   │   ├── Step1Route.jsx      # Route selection (From/To)
│   │   ├── Step2Details.jsx    # Flight details (Airline, Class, etc.)
│   │   └── Step3Date.jsx       # Date selection & summary
│   ├── ui/              # Base UI components
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── OptionCard.jsx      # Selectable card component
│   │   └── StepIndicator.jsx   # Progress stepper
│   └── PredictionResult.jsx    # Price prediction result display
├── constants/           # Application constants
│   └── flightData.js           # Cities, airlines, times, etc.
├── utils/               # Utility functions
│   └── api.js                  # API calls
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and animations
```

## 🎯 Component Hierarchy

```
App
├── StepIndicator
├── Step1Route
│   ├── OptionCard (cities)
│   └── Button
├── Step2Details
│   ├── OptionCard (airlines, class, stops, times)
│   └── Button
├── Step3Date
│   ├── Date Input
│   └── Button
└── PredictionResult
    └── Button
```

## 📝 User Flow

### Step 1: Route Selection
**Question:** "Where are you flying?"
- From which city? (6 options with icons)
- To which city? (6 options, excluding source)
- Progressive disclosure: destination appears after source selection

### Step 2: Flight Details
**Questions:**
1. "Which airline do you prefer?" (6 airlines with logos)
2. "What class would you like to travel?" (Economy/Business with descriptions)
3. "How many stops are acceptable?" (Non-stop, 1 Stop, 2+ Stops with descriptions)
4. "When do you want to depart?" (6 time slots with icons)
5. "When would you like to arrive?" (6 time slots with icons)
- Progressive disclosure: each question appears after previous is answered

### Step 3: Date & Summary
**Question:** "When do you want to fly?"
- Date picker with minimum date validation
- Complete trip summary before submission
- Brand-colored CTA button

### Step 4: Result
- Large display of predicted price
- Flight details summary
- Share functionality
- Price tips
- Option to search again

## 🎨 Design Features

- **Dark-first design** following DESIGN.md
- **Progressive disclosure** - questions appear one at a time
- **Clear visual feedback** - selected options highlighted
- **Smooth animations** - fadeIn effects
- **Responsive layout** - works on all screen sizes
- **Conversational UI** - questions phrased naturally
- **Icons and emojis** - visual cues for better UX

## 🔧 Key Improvements

1. **Organized Structure**
   - Separation of concerns
   - Reusable components
   - Clear file organization

2. **Better UX**
   - Step-by-step guidance
   - Visual progress indicator
   - Helpful descriptions and hints
   - Progressive disclosure reduces overwhelm

3. **Maintainability**
   - Constants in separate file
   - API calls abstracted
   - DRY components
   - Easy to extend

4. **User-Friendly Questions**
   - Natural language
   - Clear context
   - Helpful hints
   - Visual feedback

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## 📦 Dependencies

- React - UI library
- Axios - HTTP client
- TailwindCSS - Styling
- Vite - Build tool

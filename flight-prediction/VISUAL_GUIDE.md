# FlightFare AI - Visual Guide

## Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  FlightFare AI    Smart Price Prediction    Step 1 of 3   [🌙] │ ← Navbar with theme toggle
├───────────┬─────────────────────────────────────────────────────┤
│           │                                                     │
│  STEPPER  │              CONTENT AREA                          │
│  (Left)   │              (Right)                               │
│           │                                                     │
│  ●─────   │    STEP 1 • ROUTE SELECTION                       │
│  Route    │    Where are you flying?                          │
│           │    Select your departure and arrival cities        │
│  ○─────   │                                                     │
│  Details  │    [📍] From which city?                          │
│           │    [Delhi]  [Mumbai]  [Bangalore]                 │
│  ○─────   │    [Kolkata] [Hyderabad] [Chennai]               │
│  Date     │                                                     │
│           │    [📥] To which city?                            │
│  320px    │    [City Grid...]                                  │
│           │                                                     │
│           │                      [Continue →]                   │
│           │                                                     │
└───────────┴─────────────────────────────────────────────────────┘
│  Powered by Machine Learning • Historical Data Analysis        │
└─────────────────────────────────────────────────────────────────┘
```

---

## Theme Toggle States

### Dark Mode (Default)
```
┌─────────────────────────────────────────┐
│ Background: #0b0b0b (near black)       │
│ Cards:      #212121 (dark gray)        │
│ Text:       #ffffff (white)            │
│ Borders:    #353535 (subtle)           │
│ Toggle:     [☀️] Sun icon              │
└─────────────────────────────────────────┘
```

### Light Mode
```
┌─────────────────────────────────────────┐
│ Background: #ffffff (pure white)       │
│ Cards:      #fafafa (off-white)        │
│ Text:       #0b0b0b (black)            │
│ Borders:    #ededed (light gray)       │
│ Toggle:     [🌙] Moon icon             │
└─────────────────────────────────────────┘
```

---

## Button Variations

### Dark Mode Buttons:
```
┌─────────────────────────────────────┐
│ Primary/Brand:                      │
│  ┌──────────────────────┐           │
│  │ ⚡ Get Price → │ White bg    │
│  └──────────────────────┘           │
│                                     │
│ Secondary:                          │
│  ┌──────────────────────┐           │
│  │ ← Back │ Dark gray bg         │
│  └──────────────────────┘           │
└─────────────────────────────────────┘
```

### Light Mode Buttons:
```
┌─────────────────────────────────────┐
│ Primary/Brand:                      │
│  ┌──────────────────────┐           │
│  │ ⚡ Get Price → │ Black bg     │
│  └──────────────────────┘           │
│                                     │
│ Secondary:                          │
│  ┌──────────────────────┐           │
│  │ ← Back │ White bg w/ border   │
│  └──────────────────────┘           │
└─────────────────────────────────────┘
```

---

## Step Indicator (Vertical - Left Side)

### Step States:

```
Active Step (Current):
┌─────┐
│ ●   │ ← White/Black circle (theme dependent)
│ │   │   with icon, glow effect
└─────┘

Completed Step:
┌─────┐
│ ✓   │ ← White/Black circle with checkmark
│ │   │   
└─────┘

Upcoming Step:
┌─────┐
│ ○   │ ← Gray outline circle with gray icon
│     │   
└─────┘

Vertical Connector:
│     │ ← Animated line (gray → white/black)
```

---

## Step 1: Route Selection

```
┌─────────────────────────────────────────────────────┐
│  STEP 1 • ROUTE SELECTION                          │
│  Where are you flying?                              │
│  Select your departure and arrival cities           │
│                                                     │
│  [📤] From which city?                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐             │
│  │🏢 Delhi │ │🚢Mumbai │ │🌳Bangalo│             │
│  └─────────┘ └─────────┘ └─────────┘             │
│                                                     │
│  [📥] To which city?                               │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐             │
│  │City Grid...                                      │
│  └─────────┘                                        │
│                                                     │
│           [Continue to Flight Details →]            │
└─────────────────────────────────────────────────────┘
```

---

## Step 2: Flight Details

```
┌─────────────────────────────────────────────────────┐
│  STEP 2 • FLIGHT PREFERENCES                       │
│  Choose your preferences                            │
│  Delhi → Mumbai                                     │
│                                                     │
│  [✈️] Which airline do you prefer?                 │
│  [Airline Grid...]                                  │
│                                                     │
│  [🏆] What class would you like to travel?         │
│  [Economy] [Business]                               │
│                                                     │
│  [🔄] How many stops are acceptable?               │
│  [Non-stop] [1 Stop] [2+ Stops]                    │
│                                                     │
│  [🕐] When do you want to depart?                  │
│  [Time Grid...]                                     │
│                                                     │
│         [← Back] [Continue to Date Selection →]    │
└─────────────────────────────────────────────────────┘
```

---

## Step 3: Date & Summary

```
┌─────────────────────────────────────────────────────┐
│  STEP 3 • DEPARTURE DATE                           │
│  When do you want to fly?                           │
│  Select your departure date...                      │
│                                                     │
│  [📅] What is your departure date?                 │
│  ┌───────────────────┐                             │
│  │ [Date Picker]     │                             │
│  └───────────────────┘                             │
│  ℹ️ You can select any date from today onwards     │
│                                                     │
│  ┌──────────────────────────────────────┐          │
│  │ [📝] Your Trip Summary               │          │
│  │                                      │          │
│  │ Route      Delhi → Mumbai            │          │
│  │ Airline    SpiceJet                  │          │
│  │ Class      Economy                   │          │
│  │ Stops      Non-stop                  │          │
│  │ Date       Jan 15, 2025              │          │
│  └──────────────────────────────────────┘          │
│                                                     │
│         [← Back] [⚡ Get Price Prediction]         │
└─────────────────────────────────────────────────────┘
```

---

## Result Screen

```
┌─────────────────────────────────────────────────────┐
│            [✓ PREDICTED PRICE]                      │
│                                                     │
│                ₹15,850                              │
│                                                     │
│    Based on historical data and current trends      │
│                                                     │
│  ┌───────────────────────────────────────┐         │
│  │  ✈️ Flight Details                   │         │
│  │                                       │         │
│  │  📍 Route      Delhi → Mumbai         │         │
│  │  📅 Date       Jan 15, 2025          │         │
│  │  ✈️ Airline    SpiceJet              │         │
│  │  ✓ Class       Economy                │         │
│  └───────────────────────────────────────┘         │
│                                                     │
│    [🔄 Search Another] [📤 Share Result]          │
│                                                     │
│  ┌───────────────────────────────────────┐         │
│  │  💡 Price Tips                        │         │
│  │  • Book 3-4 weeks in advance          │         │
│  │  • Tue-Wed are usually cheaper        │         │
│  │  • Early/late flights more affordable │         │
│  └───────────────────────────────────────┘         │
└─────────────────────────────────────────────────────┘
```

---

## Icon Usage Guide

### Navigation Icons:
- `ArrowRight` (→) - Continue, Next step
- `ArrowLeft` (←) - Back, Previous step
- `Flash` (⚡) - Action, Get prediction
- `ArrowRotateLeft` (🔄) - Reset, Start over
- `Share` (📤) - Share results

### Category Icons:
- `Send2` (📤) - Departure city
- `Receive` (📥) - Arrival city
- `Airplane` (✈️) - Airline, Flight
- `Medal` (🏆) - Class selection
- `Repeat` (🔄) - Stops
- `Clock` (🕐) - Time
- `Calendar` (📅) - Date
- `Location` (📍) - Route
- `Notepad` (📝) - Summary
- `Lamp` (💡) - Tips
- `TickCircle` (✓) - Completed, Success

### Theme Icons:
- `Sun1` (☀️) - Light mode (shown in dark mode)
- `Moon` (🌙) - Dark mode (shown in light mode)

---

## Color Palette Reference

### Dark Mode:
```
Canvas:     #0b0b0b  ████  Near black
Card:       #212121  ████  Dark gray
Border:     #353535  ████  Subtle border
Slate:      #505b6c  ████  Hover state
Mute:       #797979  ████  Secondary text
Ash:        #b9b9b9  ████  Body text
On-Primary: #ffffff  ████  White text
```

### Light Mode:
```
Canvas:     #ffffff  ████  Pure white
Card:       #fafafa  ████  Off-white
Border:     #ededed  ████  Light border
Mute:       #797979  ████  Secondary text
Ink:        #0b0b0b  ████  Black text
```

### Semantic Colors (Both Modes):
```
Success:    #37cd84  ████  Green
Error:      #dd0000  ████  Red
```

---

## Responsive Breakpoints

```
Desktop (1200px+):
├── Left: Stepper (320px fixed)
└── Right: Content (flex-1)

Tablet (768px - 1199px):
├── Top: Horizontal stepper
└── Bottom: Content (full-width)

Mobile (<768px):
├── Top: Minimal stepper
└── Bottom: Content (full-width, stacked)
```

---

## Animation Patterns

```
Page Enter:     fadeIn (0.5s)
Step Change:    slideInLeft / slideInRight (0.6s)
Element Pop:    scaleIn (0.5s)
Hover:          scale(1.02) + shadow
Active:         scale(0.98)
Progress Line:  scaleX animation (0.5s)
Theme Toggle:   200ms transition
```

---

## User Flow

```
1. Landing
   ↓
2. Select Cities (Step 1)
   ↓
3. Choose Preferences (Step 2)
   ↓
4. Pick Date & Review (Step 3)
   ↓
5. Get Prediction (Result)
   ↓
6. Share or Search Again
```

Each step is clearly marked in the left sidebar with visual progress indicators.

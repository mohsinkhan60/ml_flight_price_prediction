# Flight Price Prediction - User Flow

## 🎯 User Journey

### Landing Page
```
┌─────────────────────────────────────────────┐
│  AI-POWERED PRICE PREDICTION                │
│  Find Your Best Flight Price                │
│  Answer a few simple questions              │
└─────────────────────────────────────────────┘

Step Progress: [1] ─── [2] ─── [3]
                ✓     ○       ○
```

---

## Step 1: Where Are You Flying?

### Question Format:
**🛫 From which city?**
```
┌────────┐ ┌────────┐ ┌────────┐
│ 🏛️     │ │ 🌊     │ │ 🌳     │
│ Delhi  │ │ Mumbai │ │Bangalore│
└────────┘ └────────┘ └────────┘
┌────────┐ ┌────────┐ ┌────────┐
│ 🎭     │ │ 🏰     │ │ 🏖️     │
│Kolkata │ │Hyderabad│ │Chennai │
└────────┘ └────────┘ └────────┘
```

After selection, next question appears:

**🛬 To which city?**
```
[Same city grid, source city disabled]
💡 You cannot select the same city as your departure
```

**Continue Button appears when both selected**
```
┌──────────────────────────────────┐
│  Continue to Flight Details  →   │
└──────────────────────────────────┘
```

---

## Step 2: Choose Your Flight Preferences

### Question 1: Airline
**✈️ Which airline do you prefer?**
```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ 🌶️      │ │ ✈️      │ │ ⭐      │
│SpiceJet │ │ AirAsia │ │ Vistara │
└─────────┘ └─────────┘ └─────────┘
┌─────────┐ ┌─────────┐ ┌─────────┐
│ 🚀      │ │ 🔵      │ │ 🇮🇳      │
│GO FIRST │ │ Indigo  │ │Air India│
└─────────┘ └─────────┘ └─────────┘
```

### Question 2: Class (appears after airline selected)
**💺 What class would you like to travel?**
```
┌──────────────────────────────┐ ┌──────────────────────────────┐
│         Economy              │ │         Business             │
│ Standard seating with        │ │ Premium seating with         │
│ basic amenities              │ │ extra legroom                │
└──────────────────────────────┘ └──────────────────────────────┘
```

### Question 3: Stops (appears after class selected)
**🔄 How many stops are acceptable?**
```
┌────────────┐ ┌────────────┐ ┌────────────┐
│  Non-stop  │ │   1 Stop   │ │  2+ Stops  │
│Direct flight│ │One stopover│ │Multiple    │
└────────────┘ └────────────┘ └────────────┘
```

### Question 4: Departure Time (appears after stops selected)
**🕐 When do you want to depart?**
```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ 🌅 Early      │ │ ☀️ Morning    │ │ 🌤️ Afternoon │
│ Morning       │ │              │ │              │
│ 12 AM - 6 AM  │ │ 6 AM - 12 PM │ │ 12 PM - 4 PM │
└──────────────┘ └──────────────┘ └──────────────┘
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ 🌆 Evening    │ │ 🌙 Night      │ │ 🌃 Late Night│
│              │ │              │ │              │
│ 4 PM - 8 PM  │ │ 8 PM - 12 AM │ │ 12 AM - 4 AM │
└──────────────┘ └──────────────┘ └──────────────┘
```

### Question 5: Arrival Time (appears after departure selected)
**🕐 When would you like to arrive?**
```
[Same time grid as above]
```

### Navigation (appears when all questions answered)
```
┌──────────┐              ┌───────────────────────────┐
│ ← Back   │              │ Continue to Date →        │
└──────────┘              └───────────────────────────┘
```

---

## Step 3: When Do You Want to Fly?

### Summary Header
```
Delhi → Mumbai • SpiceJet • Economy
```

### Main Question
**📅 What is your departure date?**
```
┌────────────────────────────────────────┐
│  [Date Picker]                         │
│  YYYY-MM-DD                            │
└────────────────────────────────────────┘
💡 You can select any date from today onwards
```

### Trip Summary (appears after date selected)
```
┌─────────────────────────────────────────┐
│ 📋 Your Trip Summary                    │
├─────────────────────────────────────────┤
│ Route        │ Delhi → Mumbai           │
│ Airline      │ SpiceJet                 │
│ Class        │ Economy                  │
│ Stops        │ Non-stop                 │
│ Departure    │ Morning                  │
│ Arrival      │ Evening                  │
│ Date         │ Sat, Dec 15, 2024        │
└─────────────────────────────────────────┘
```

### Navigation
```
┌──────────┐              ┌───────────────────────────┐
│ ← Back   │              │ Get Price Prediction 💰   │
└──────────┘              └───────────────────────────┘
                          [Brand color: Coral Red]
```

---

## Step 4: Prediction Result

### Success Display
```
┌─────────────────────────────────────────┐
│  ✓ PREDICTED PRICE                      │
│                                         │
│         ₹8,547                          │
│                                         │
│  Based on historical data and           │
│  current market trends                  │
├─────────────────────────────────────────┤
│  📋 Flight Details                      │
│  Route     │ Delhi → Mumbai             │
│  Date      │ Sat, Dec 15, 2024          │
│  Airline   │ SpiceJet                   │
│  Class     │ Economy                    │
└─────────────────────────────────────────┘

┌──────────────────────┐  ┌──────────────────┐
│ 🔄 Search Another    │  │ 📤 Share Result  │
└──────────────────────┘  └──────────────────┘
```

### Price Tips
```
┌─────────────────────────────────────────┐
│ 💡 Price Tips                           │
│                                         │
│ • Booking 3-4 weeks in advance          │
│   typically offers the best prices      │
│ • Flights on Tuesday and Wednesday      │
│   are usually cheaper                   │
│ • Early morning and late night flights  │
│   tend to be more affordable            │
└─────────────────────────────────────────┘
```

---

## 🎨 Design Principles Applied

1. **Progressive Disclosure**
   - One question at a time
   - Reduces cognitive load
   - Maintains focus

2. **Clear Visual Hierarchy**
   - Large, clear questions
   - Visual icons for context
   - Helpful descriptions

3. **Instant Feedback**
   - Selected state clearly visible
   - Disabled states for invalid options
   - Loading states during API calls

4. **Contextual Hints**
   - Helpful tips appear when needed
   - Icons provide visual context
   - Descriptions explain options

5. **Conversational Tone**
   - Questions phrased naturally
   - Emojis make it friendly
   - Tips and guidance throughout

---

## 📊 Data Flow

```
User Input → State Management → API Call → Result Display
     ↓              ↓               ↓            ↓
  Steps 1-3    formData State   Backend API   Result Card
     ↓              ↓               ↓            ↓
  Validation   State Updates   Prediction   Success/Error
```

## 🔄 Navigation Flow

```
       Step 1
         ↓
   [Continue] →  Step 2
                   ↓
         [Back] ← [Continue] →  Step 3
                                  ↓
                        [Back] ← [Submit]
                                  ↓
                              Result Page
                                  ↓
                           [Search Again]
                                  ↓
                               Step 1
```

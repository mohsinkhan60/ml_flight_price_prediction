# 🚀 Quick Fix Guide - Flight Price Prediction

## ⚠️ Problem
Your frontend can't connect to the backend API due to CORS restrictions.

## ✅ Solution Applied
I've updated the backend to allow all origins (CORS fix).

## 🔥 Deploy the Fix Now

### Step 1: Deploy Backend (REQUIRED)
```bash
cd /Users/mohsinkhan/Coding/flight-price-prediction/backend
vercel --prod
```

### Step 2: Test It Works
Open your frontend and try to get a price prediction. Check browser console (F12) for any errors.

### Step 3: (Optional) Test Backend Directly
```bash
cd /Users/mohsinkhan/Coding/flight-price-prediction/backend
python3 test_api.py
```

## 📝 What Changed?

### Backend (`api/index.py`)
- ✅ CORS now allows all origins
- ✅ Better error messages
- ✅ More detailed logging

### Frontend (`utils/api.js`)
- ✅ 30 second timeout
- ✅ Better error handling
- ✅ Console logging for debugging

## 🧪 Quick Test

After deploying, test with this curl command:

```bash
curl -X POST https://ml-flight-price-prediction-backend.vercel.app/predict \
  -H "Content-Type: application/json" \
  -d '{
    "airline": "SpiceJet",
    "source_city": "Delhi",
    "destination_city": "Mumbai",
    "departure_time": "Morning",
    "arrival_time": "Evening",
    "stops": "zero",
    "class": "Economy",
    "departure_date": "2024-09-15"
  }'
```

Expected: `{"prediction": 8547.23}`

## 🎯 That's It!

Just run `vercel --prod` in the backend folder and your API will work! 🚀

---

**Need Help?**
Check `backend/DEPLOYMENT_FIX.md` for detailed troubleshooting.

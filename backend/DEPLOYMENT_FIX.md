# 🔧 Backend API Deployment Fix

## 🐛 Issue Identified

The CORS (Cross-Origin Resource Sharing) configuration was blocking requests from your Vercel preview URL: `https://ml-flight-price-prediction-frontend-b8fhz8h4a.vercel.app`

## ✅ Fixes Applied

1. **CORS Configuration Updated** - Now allows all origins (recommended for testing)
2. **Better Error Handling** - More detailed error messages
3. **Logging Added** - Console logs for debugging
4. **Timeout Increased** - 30 second timeout for API requests

## 🚀 Deployment Steps

### 1. Deploy Backend to Vercel

```bash
cd /Users/mohsinkhan/Coding/flight-price-prediction/backend
vercel --prod
```

This will deploy your updated backend with the new CORS settings.

### 2. Test the API Locally (Optional)

```bash
# Install dependencies
pip3 install -r requirements.txt

# Run the server
python3 app.py

# In another terminal, test it
python3 test_api.py
```

### 3. Test the Deployed API

```bash
# Change API_URL in test_api.py to your Vercel URL
# Then run:
python3 test_api.py
```

## 🔍 What Was Changed

### File: `backend/api/index.py`

**Before:**
```python
CORS(app, resources={
    r"/*": {
        "origins": [
            "https://ml-flight-price-prediction-frontend.vercel.app",
            "http://localhost:5173",
        ]
    }
})
```

**After:**
```python
CORS(app, resources={
    r"/*": {
        "origins": "*",  # Allow all origins
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization", "Accept"],
    }
})
```

### File: `frontend/src/utils/api.js`

**Improvements:**
- ✅ Added detailed error logging
- ✅ Better error messages for users
- ✅ 30 second timeout
- ✅ Console logging for debugging

## 🧪 Testing the Fix

### Manual Test via cURL:

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

Expected Response:
```json
{"prediction": 8547.23}
```

### Browser Test:

1. Open browser console (F12)
2. Go to your frontend URL
3. Fill out the form and submit
4. Check console for detailed logs
5. Look for any CORS errors (should be gone now)

## 🔒 Security Note

The current CORS configuration allows **all origins** (`"origins": "*"`). This is fine for:
- ✅ Development
- ✅ Testing
- ✅ Vercel preview deployments

For production, you should restrict to specific domains:

```python
CORS(app, resources={
    r"/*": {
        "origins": [
            "https://your-production-domain.com",
            "https://ml-flight-price-prediction-frontend.vercel.app"
        ]
    }
})
```

## 📝 Common Errors & Solutions

### Error: "No response from server"
**Solution:** Backend is down or URL is incorrect
```bash
# Check if backend is responding
curl https://ml-flight-price-prediction-backend.vercel.app/
```

### Error: "CORS policy blocked"
**Solution:** CORS not configured properly
```bash
# Redeploy backend with updated CORS
cd backend
vercel --prod
```

### Error: "Invalid or missing data"
**Solution:** Check that all required fields are sent
- airline
- source_city
- destination_city
- departure_time
- arrival_time
- stops
- class
- departure_date

### Error: "Module not found: sklearn"
**Solution:** Model needs scikit-learn, ensure requirements.txt includes:
```
scikit-learn==1.5.2
```

## 🎯 Next Steps

1. **Redeploy Backend:**
   ```bash
   cd backend
   vercel --prod
   ```

2. **Test Frontend:**
   - Open your frontend URL
   - Open browser console (F12)
   - Submit a prediction
   - Check for errors

3. **Monitor Logs:**
   ```bash
   vercel logs
   ```

## 📞 Still Having Issues?

Check these:
1. ✅ Backend deployed successfully
2. ✅ Model file (model.pkl) included in deployment
3. ✅ Frontend using correct API URL
4. ✅ No typos in field names
5. ✅ Date format is YYYY-MM-DD
6. ✅ Browser console shows detailed error logs

## 🎉 Expected Behavior

After fix:
1. User fills form step-by-step
2. Clicks "Get Price Prediction"
3. Loading spinner shows
4. API request sent to backend
5. Backend processes prediction
6. Price displayed: ₹X,XXX
7. No CORS errors in console
8. Success! 🚀

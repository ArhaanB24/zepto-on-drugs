# Authentication Setup Guide

This guide will help you set up the authentication system for TrialBridge.

## Prerequisites

1. **Google OAuth Setup**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add `http://127.0.0.1:8000/auth/callback` to authorized redirect URIs

2. **Supabase Setup**
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Create a `users` table with the following schema:
   ```sql
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     google_token TEXT UNIQUE NOT NULL,
     email TEXT NOT NULL,
     name TEXT NOT NULL,
     picture TEXT,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

3. **Firebase Setup (Backend Only)**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Download the service account key JSON file
   - Place it in the `backend/` directory as `incubate-4b884-firebase-adminsdk-fbsvc-abcd1f9767.json`
   - Note: Firebase is only used in the backend for admin operations, not for frontend authentication

## Environment Variables Setup

### Backend (.env file in backend directory)

Create a `.env` file in the `backend/` directory:

```bash
# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# Supabase Configuration
SUPABASE_URL=your_supabase_url_here
SUPABASE_KEY=your_supabase_anon_key_here

# Firebase Configuration (for backend admin SDK)
FIREBASE_PROJECT_ID=your_firebase_project_id_here
```

### Frontend (.env.local file in frontend directory)

No environment variables are needed for the frontend since all authentication is handled through the backend API.

## Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   # or if using uv:
   uv sync
   ```

3. Start the backend server:
   ```bash
   uvicorn main:app --reload --host 127.0.0.1 --port 8000
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

## How the Authentication Flow Works

1. **User clicks "Continue with Google"** on `/login`
2. **Frontend calls backend** `/auth/login` endpoint
3. **Backend returns Google OAuth URL** with proper parameters
4. **User is redirected to Google** for authentication
5. **Google redirects back** to `/auth/callback` with authorization code
6. **Backend exchanges code** for access token and gets user info
7. **Backend saves/updates user** in Supabase database
8. **Backend redirects to frontend** `/dashboard` with user ID
9. **Frontend fetches user data** from backend and displays dashboard

## Testing the Authentication

1. Start both backend and frontend servers
2. Navigate to `http://localhost:3000/login`
3. Click "Continue with Google"
4. Complete Google OAuth flow
5. You should be redirected to the dashboard with your user information

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure the backend CORS middleware is properly configured
2. **Environment Variables**: Ensure all environment variables are set correctly
3. **Google OAuth**: Verify redirect URI matches exactly in Google Cloud Console
4. **Supabase Connection**: Check if Supabase URL and key are correct
5. **Firebase**: Ensure service account JSON file is in the correct location

### Debug Steps

1. Check browser console for frontend errors
2. Check backend terminal for server errors
3. Verify all environment variables are loaded
4. Test backend endpoints directly with tools like Postman
5. Check Supabase dashboard for database operations

## Security Notes

- Never commit `.env` files to version control
- Use environment variables for all sensitive configuration
- Implement proper session management in production
- Add rate limiting to authentication endpoints
- Use HTTPS in production environments 
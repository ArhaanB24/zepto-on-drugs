import os
from fastapi import FastAPI
import firebase_admin
from firebase_admin import credentials
from fastapi import FastAPI, HTTPException
from fastapi.responses import RedirectResponse,JSONResponse
import requests
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from supabase import create_client
from contextlib import asynccontextmanager
from dotenv import load_dotenv
load_dotenv()

cred = credentials.Certificate("incubate-4b884-firebase-adminsdk-fbsvc-abcd1f9767.json")
firebase_admin.initialize_app(cred)

@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.shared_data = {}
    yield

app = FastAPI(lifespan=lifespan)
# use pydantic to take in form data
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
print(url,key)
if url and key:

    supabase = create_client(url,key)

baseurl = "http://127.0.0.1:8000"
CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
REDIRECT_URI = f"{baseurl}/auth/callback"
AUTHORIZATION_URL = "https://accounts.google.com/o/oauth2/auth"
TOKEN_URL = "https://oauth2.googleapis.com/token"
USER_INFO_URL = "https://www.googleapis.com/oauth2/v2/userinfo"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (change to specific origins for better security)
    allow_credentials=True,  # Allow cookies and authentication headers
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)



@app.post("/auth/login")
def login(action:str):
    if action != "start_auth":
        raise HTTPException(status_code=400, detail="Invalid action")
    params = {
        "client_id": CLIENT_ID,
        "redirect_uri": REDIRECT_URI,
        "response_type": "code",
        "scope": "openid%20email%20profile",
    }
    print("REDIRECTING")
    auth_url = f"{AUTHORIZATION_URL}?{'&'.join(f'{k}={v}' for k, v in params.items())}"
    
    return JSONResponse({"auth_url": auth_url})



@app.get("/auth/callback")
def callback(code:str = ""):
    if not code:
        raise HTTPException(status_code=400, detail="Authorization code not provided")
    token_data = {
        "code": code,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "redirect_uri": REDIRECT_URI,
        "grant_type": "authorization_code",
    }
    token_response = requests.post(TOKEN_URL, data=token_data)
    token_response_data = token_response.json()
    if "access_token" not in token_response_data:
        raise HTTPException(status_code=400, detail="Failed to retrieve access token")
    access_token = token_response_data["access_token"]
    user_info_response = requests.get(USER_INFO_URL, headers={"Authorization": f"Bearer {access_token}"})
    user_info = user_info_response.json()
    print(user_info)
    app.state.shared_data = {"google_id":user_info['id']}
    existing = supabase.table("users").select("id").eq("google_token", user_info["id"]).execute()
    if existing.data:
        # redirect to the home page
        return {"message": "User already exists", "id": existing.data[0]["id"]}
    user_data = {
        "google_token": user_info["id"],
        "email": user_info["email"],
        "name": user_info["name"],
        "picture": user_info["picture"]
    }
    response = supabase.table("users").insert(user_data).execute()
    # redirect to login form
    return {"message": "Login successful", "user": user_info}

class MedicalFormData(BaseModel):
    allergies: str
    allopathicMedications: str
    ayurvedicMedications: str
    bloodPressure: str
    currentMedicalConditions: str
    currentMedications: str
    dob: str
    ethnicity: str
    familyHistory: str
    heartRate: str
    height: str
    liverFunctionTest: str
    maritalStatus: str
    name: str
    numberOfChildren: str
    officiating: str
    ongoingTreatment: str
    otcMedications: str
    pastMedicalConditions: str
    renalFunctionTest: str
    residence: str
    sex: str
    surgicalHistory: str
    weight: str

@app.post("/api/quest")
async def handleForm(data:MedicalFormData):
    if data:
        print(data)
        return {"message": "Operation successful"}
    else:
        return {"message": "Nahi Mila Kuch"}

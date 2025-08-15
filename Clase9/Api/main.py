# ---- Creación de la aplicación ----
from fastapi import FastAPI

app = FastAPI()

# ---- Configuración de CORS ----
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---- Rutas ----
from Routes.cards import router as cards_routers

app.include_router(cards_routers, prefix="/cards")

# --- Creacion de la aplicacion FastAPI ---
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# --- COnfiguracion del CORS ---

# Permite solicitudes desde cualquier origen
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir todos los orígenes
    allow_credentials=True,  # Permitir el uso de cookies/autenticación
    allow_methods=["*"],  # Permitir todos los métodos HTTP
    allow_headers=["*"],  # Permitir todos los encabezados
)

# --- Creacion de modelos con entrada Pydantic ---


class usuarioData(BaseModel):
    """Modelo para recibir el usuario desde cualquier direccion"""

    usuario: str


# --- Ruta de la API ---
@app.post("/recibir_usuario")
def recibir_usuario(data):
    """
    Recibe los datos del usuario enviados desde un input o algo mas

    Args:
        data (usuarioData): Objeto con el nombre del usuario

    Returns:
        dict: Mensaje de confirmacion junto a mensaje personalizado
    """
    print(data)
    return {"mensaje": "Hola, lo hiciste bien, seguí con ganas"}

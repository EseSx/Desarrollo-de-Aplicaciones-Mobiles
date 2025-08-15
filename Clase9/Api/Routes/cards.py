# ---- Creacion de router ----
from fastapi import APIRouter

router = APIRouter()

# ---- Funciones auxiliares ----
from Modules.BDSimulada import get_all, get_by_number, get_by_valor_riesgo

# ---- Rutas CRUD ----


@router.get("/get_all")
async def ver_cartas():
    res = await get_all()
    return res


@router.get("/get_by/{number}")
async def ver_cartas_por_numero(number: int):
    res = await get_by_number(number)
    return res


@router.get("/get_by_valor_riesgo/{number}")
async def ver_cartas_por_valor_riesgo(number: int):
    res = await get_by_valor_riesgo(number)
    return res

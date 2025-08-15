// ---- Hooks ----
import { useState, useEffect } from "react";

// ---- Styles ----
import "../styles/Carta.css";

// La funcion "Carta" recibe las cartas una vez que se exporta
export default function Carta({ cartas, cartaFija = null }) {
  const [cartaAleatoria, setCartaAleatoria] = useState(null);

  // useEffect setea una carta aleaotria cada vez que se ejecuta o se re carga la pagina
  useEffect(() => {
    if (cartaFija) {
      // Si recibe cartaFija, usa esa
      setCartaAleatoria(cartaFija);
    } else if (cartas.length > 0) {
      // Si no, usa aleatoria
      const randomIndex = Math.floor(Math.random() * cartas.length);
      setCartaAleatoria(cartas[randomIndex]);
    }
  }, [cartas, cartaFija]);

  // Aca muestra las cartas
  return (
    <div className="card-container">
      <div className="card">
        {/* Lado reverso */}
        <div className="card-face card-back">
          <img src="https://tinyurl.com/Back22S" alt="Reverso" />
        </div>

        {/* Lado frontal */}
        <div className="card-face card-front">
          {cartaAleatoria && (
            <img src={cartaAleatoria.imagen} alt={cartaAleatoria.nombre} />
          )}
        </div>
      </div>
    </div>
  );
}

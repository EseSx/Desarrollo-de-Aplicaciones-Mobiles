import { useState, useEffect } from "react";
import "../styles/Carta.css";

export default function Carta({ cartas }) {
  const [cartaAleatoria, setCartaAleatoria] = useState(null);

  useEffect(() => {
    if (cartas.length > 0) {
      const randomIndex = Math.floor(Math.random() * cartas.length);
      setCartaAleatoria(cartas[randomIndex]);
    }
  }, [cartas]);

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

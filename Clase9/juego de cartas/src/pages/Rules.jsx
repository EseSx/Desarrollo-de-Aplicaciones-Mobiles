// ---- Hooks ----
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useLocation } from "react-router-dom";
import Carta from "../components/Carta";
import "../styles/Rules.css";
import "../styles/App.css";

export default function Rules() {
  // ---- Ruta dinamica ----
  const { Especificacion } = useParams();

  if (Especificacion) {
    return (
      <h1>
        Aca se deberia evaluar y mostrar, reglas del juego o de cartas pero
        bueno, ya las explique al principio y las cartas tiene su propia seccion
      </h1>
    );
  }

  // ---- Ruta estatica ----
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const card = query.get("Card");

  useEffect(() => {
    if (card) {
      const element = document.getElementById(card);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [card]);

  const cartas = JSON.parse(localStorage.getItem("cartas")) || [];
  console.log(cartas);

  return (
    <>
      {cartas.map((carta, index) => (
        <div
          key={carta.numero}
          className="fila"
          style={{
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
          }}
        >
          <div className="texto" style={{ flex: 1, padding: "0 20px" }}>
            <h3 className="nombre">{carta.nombre}</h3>
            <p className="descripcionIngles">{carta.descripcion?.ingles}</p>
            <p className="descripcionEspañol">{carta.descripcion?.español}</p>
            <p>
              <span className="titular">Valor riesgo</span>:{" "}
              {carta.valor_riesgo}
            </p>
            <p>
              <span className="titular">Efectos</span>: <br />
              <span className="titular">voltear</span> → {carta.efecto?.voltear}{" "}
              <br /> <span className="titular">tomar</span> →{" "}
              {carta.efecto?.tomar}
            </p>
            <p>
              <span className="titular">Afiliación</span>: {carta.afiliacion}
            </p>
            <p className="titular justificacion">{carta.justificacion}</p>
          </div>
          <div className="carta" style={{ flex: 1 }}>
            <Carta cartaFija={carta} />
          </div>
        </div>
      ))}
      <Navigation />
    </>
  );
}

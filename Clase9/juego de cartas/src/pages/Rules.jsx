// ---- Hooks ----
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useLocation } from "react-router-dom";

export default function Rules() {
  // ---- Ruta dinamica ----
  const { Especificacion } = useParams();

  if (Especificacion) {
    return (
      <h1>Aca se deberia evaluar y mostrar, reglas del juego o de cartas</h1>
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

  return (
    <>
      <section id="fool">
        <h1>buscaste fool</h1>
      </section>
      <h1>
        . <br /> . <br /> . <br /> . <br /> . <br /> . <br /> . <br /> . <br />{" "}
        . <br /> . <br /> . <br /> . <br /> . <br /> . <br /> . <br /> . <br />{" "}
        . <br /> . <br /> . <br /> . <br /> . <br /> . <br /> . <br /> . <br />{" "}
        . <br /> . <br /> . <br /> . <br /> . <br /> . <br /> . <br /> . <br />{" "}
        .
      </h1>
      <Navigation></Navigation>
    </>
  );
}

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Página Principal</Link>
      <Link to="/Play">Jugar</Link>
      <Link to="/Rules">Reglas del juego y las cartas</Link>

      {/* Dinamicos */}
      <Link to="/Rules/Game">Reglas del juego</Link>
      <Link to="/Rules/Cards">Reglas de las cartas</Link>

      {/* Query */}
      <Link to="/Rules?Card=fool">0 - Fool</Link>
    </nav>
  );
}

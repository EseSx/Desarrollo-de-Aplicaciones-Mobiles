import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import "../styles/App.css";

export default function Navigation() {
  return (
    <nav className="navegacion">
      <ul>
        <li>
          <Link to="/">Página Principal</Link>
        </li>
        <li>
          <Link to="/Rules">Reglas del juego y las cartas</Link>
        </li>
        <li>
          <Link to="/Rules/Game">Reglas del juego</Link>
        </li>
        <li>
          <Link to="/Rules/Cards">Reglas de las cartas</Link>
        </li>
        <li>
          <Link to="/Rules?Card=fool">0 - Fool</Link>
        </li>
      </ul>
    </nav>
  );
}

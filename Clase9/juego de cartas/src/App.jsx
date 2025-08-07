// ---- Estilos ----
import "./styles/App.css";

// ---- Componentes ----
import Navigation from "./components/Navigation";

// ---- Hooks ----

// ---- Librerias ----
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ---- Roots ----
import Home from "./pages/Home";
import Play from "./pages/Play";
import Rules from "./pages/Rules";
// ---- Guias ----
// Contenidos a incluir:
// 1. Componentes [X]
// 2. handlers []
// 3. useState []
// 4. useEffect [X]
// 5. fetch []
// 6. react router [X]

// Estructura pensada:
// [Titulo]
// [Barra de navegacion]
// [inicio de la pagina]
// [zona para jugar]
// [reglas de juego]

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Play" element={<Play />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Rules/:Especificacion" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
  // <>
  //   <Header />

  //   <nav>
  //     {/* Aca irian los links al inicio, a la zona de juego y a las reglas */}
  //   </nav>

  //   <h3>
  //     Sobrevive al destino trazado por las cartas. <br /> En Last Draw, cada
  //     partida lanza entre 2 y 6 cartas de tarot sobre la mesa. Cada carta
  //     tiene un efecto diferente: algunas te ayudan, otras te condenan. No hay
  //     turnos, no hay segundas oportunidades: cada tirada es un paso hacia la
  //     supervivencia o la ruina. <br /> ¿Cuánto tiempo podrás resistir el
  //     juicio del tarot?
  //   </h3>

  //   <section>{/* Aca iria el tablero para jugar */}</section>

  //   <section>{/* Aca irian las reglas del juego */}</section>
  // </>
}

export default App;

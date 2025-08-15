// ---- Estilos ----

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
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Play" element={<Play />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Rules/:Especificacion" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
  //   <section>{/* Aca iria el tablero para jugar */}</section>

  //   <section>{/* Aca irian las reglas del juego */}</section>
}

export default App;

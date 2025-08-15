// ---- Librerias ----
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";

// ---- Roots ----
import Home from "./pages/Home";
import Rules from "./pages/Rules";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Rules/:Especificacion" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

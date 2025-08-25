import { useState } from "react";

export function Usuarios({ nombre, edad }) {
  return (
    <h1>
      Hola, {nombre} <br /> Tu edad es: {edad}
    </h1>
  );
}

export function Contador() {
  const [numero, setNumero] = useState(0);
  return (
    <>
      <p>Contador: {numero}</p>
      <button onClick={() => setNumero(numero + 1)}>SUMAR</button>
      <p>{numero < 10 ? "Todavia no llegaste a 10" : "Llegaste a 10!"}</p>
    </>
  );
}

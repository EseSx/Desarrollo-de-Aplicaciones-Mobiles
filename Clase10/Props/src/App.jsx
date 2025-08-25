import "./App.css";
import { Usuarios } from "./Usuarios";
import { Contador } from "./Usuarios";
import { ListaDeUsuarios } from "./ListaDeUsuarios";
import { useState, useEffect } from "react";

function App() {
  const alumnos = [
    { nombre: "santi", edad: 18 },
    { nombre: "leo", edad: 29 },
  ];

  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json)
      .then((res) => setData(res));
  }, []);

  console.log(data);

  const usuarios = [
    "Jaime",
    "Jeronimo",
    "Julia",
    "Gyro",
    "Peperoni",
    "Foccasia",
  ];

  return (
    <>
      {alumnos.map((alumno, indice) => {
        return (
          <Usuarios key={indice} nombre={alumno.nombre} edad={alumno.edad} />
        );
      })}
      <Contador />
      {data.map((posteo) => {
        <h1>{posteo.text}</h1>;
      })}

      <ListaDeUsuarios lista={usuarios} />
    </>
  );
}

export default App;

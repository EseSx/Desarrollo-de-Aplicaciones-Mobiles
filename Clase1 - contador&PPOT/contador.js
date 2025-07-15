const texto = document.getElementById("texto");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

let contador = 0;

boton1.addEventListener("click", () => {
  contador += 1;
  texto.innerHTML = `Contador: ${contador}`;
});

boton2.addEventListener("click", () => {
  contador = 0;
  texto.innerHTML = `Contador: ${contador}`;
});

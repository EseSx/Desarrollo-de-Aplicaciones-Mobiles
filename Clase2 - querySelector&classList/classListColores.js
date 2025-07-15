const botonRojo = document.querySelector(".botonRojo");
const botonVerde = document.querySelector(".botonVerde");
const botonAzul = document.querySelector(".botonAzul");
const cuadrado = document.querySelector(".cuadrado");

botonRojo.addEventListener("click", function () {
  // cuadrado.classList.add("rojo")
  // cuadrado.classList.remove("verde", "azul")
  cuadrado.style.backgroundColor = "red";
});

botonVerde.addEventListener("click", function () {
  // cuadrado.classList.add("verde")
  // cuadrado.classList.remove("rojo", "azul")
  cuadrado.style.backgroundColor = "green";
});

botonAzul.addEventListener("click", function () {
  // cuadrado.classList.add("azul")
  // cuadrado.classList.remove("verde", "rojo")
  cuadrado.style.backgroundColor = "blue";
});

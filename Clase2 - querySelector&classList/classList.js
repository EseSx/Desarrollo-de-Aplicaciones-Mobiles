const boton = document.querySelector("#boton");
const textoSecreto = document.querySelector("#textoSecreto");

boton.addEventListener("click", function () {
  if (textoSecreto.style.display == "none") {
    textoSecreto.style.display = "block";
  } else if (textoSecreto.style.display != "none") {
    textoSecreto.style.display = "none";
  }

  // textoSecreto.classList.toggle("ocultar")
});

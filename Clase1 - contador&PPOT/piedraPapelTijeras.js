const input = document.getElementById("input");
const test1 = document.getElementById("test1");
const test2 = document.getElementById("test2");
const boton = document.getElementById("boton");
let numero1 = 0;
let numero2 = 0;
const resultado = document.getElementById("resultado");

input.addEventListener("input", () => {
  if (input.value.toLowerCase() == "pi") {
    test1.innerHTML = "Piedra";
    numero1 = 1;
  } else if (input.value.toLowerCase() == "pa") {
    test1.innerHTML = "Papel";
    numero1 = 2;
  } else if (input.value.toLowerCase() == "ti") {
    test1.innerHTML = "Tijera";
    numero1 = 3;
  }

  test2.innerHTML = "";
  resultado.innerHTML = "";
});

boton.addEventListener("click", () => {
  if (!input.value.toLowerCase()) {
    alert("Ingrese algo");
  } else {
    numero2 = Math.floor(Math.random() * 3) + 1;

    if (numero2 == 1) {
      test2.innerHTML = "Piedra";
    } else if (numero2 == 2) {
      test2.innerHTML = "Papel";
    } else if (numero2 == 3) {
      test2.innerHTML = "Tijera";
    }

    if (numero1 === numero2) {
      resultado.innerHTML = "Empate";
    } else if ((numero1 % 3) + 1 == numero2) {
      resultado.innerHTML = "CPU Gana";
    } else {
      resultado.innerHTML = "Tu ganaste";
    }
  }
});

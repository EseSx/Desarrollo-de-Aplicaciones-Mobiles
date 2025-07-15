import { useState } from "react"

function App() {
    const [contador, setContador] = useState(0)
    const [input, setInput] = useState()

    function handlerContador () {
      setContador (contador + 1)
    }

    function handlerReset () {
      setContador (0)
    }

    function handlerRestar () {
      setContador (contador - 1)
    }

    function handlerInput (e) {
      setInput (e.target.value)
    }

  return (
    <>
      <h1 className="primerH1">{contador < 10 ? "contador es menor a 10" : null}</h1>
      <h1>Contador: {contador} Input: {input}</h1>

      <input type="number" onChange={handlerInput} />

      <button onClick={handlerContador}>SUMAR</button>
      <button onClick={handlerReset}>RESET</button>
      <button onClick={handlerRestar}>RESTAR</button>
    </>
  )
}

export default App

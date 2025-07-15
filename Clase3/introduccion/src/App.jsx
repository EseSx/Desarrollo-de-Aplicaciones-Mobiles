function App() {
  return (
    <>
      <h1>Login con React</h1>

      <form action="" method="get">
        <label htmlFor="inputUsuario">Ingrese su usuario:</label>
        <input type="text" name="inputUsuario" required/>

        <label htmlFor="inputContraseña">Ingrese su contraseña:</label>
        <input type="text" name="inputContraseña" required/>

        <button type="button">ENVIAR</button>
      </form>
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const url = "http://10.0.8.57:8000/login/"

  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({user: "santi", password: "1234"})
    })
    .then(res => res.json())
    .then(res => setCount(res))
  }, [])

  return (
    <>
      {/* <img src={count?.message} /> */}
      <h1>{count?.msg}</h1>
    </>
  )
}

export default App

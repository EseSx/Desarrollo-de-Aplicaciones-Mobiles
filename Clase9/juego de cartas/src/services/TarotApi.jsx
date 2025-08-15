import { useEffect, useState } from "react";

function TarotApi() {
  const [cartas, setCartas] = useState(() => {
    const saved = localStorage.getItem("cartas");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (cartas.length === 0) {
      const url = "http://127.0.0.1:8000/cards/get_all";

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setCartas(data);
          localStorage.setItem("cartas", JSON.stringify(data));
        })
        .catch((err) => console.error("Error fetching API:", err));
    }
  }, [cartas]);

  return null;
}

export default TarotApi;

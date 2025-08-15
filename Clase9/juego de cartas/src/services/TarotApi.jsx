import { useEffect, useState } from "react";

function TarotApi() {
  const [cartas, setCartas] = useState(() => {
    const saved = localStorage.getItem("cartas");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (cartas.length === 0) {
      const url = "https://api-persona3.vercel.app//cards/get_all";

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

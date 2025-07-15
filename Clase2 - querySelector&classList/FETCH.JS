const URL = "https://10.0.8.57:11434/api/generate";
const model = "gemma3:1b-it-qat";

fetch(URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: model,
    prompt: "Que dia es?",
    stream: false,
  }),
})
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

fetch("http://10.0.8.57:8000/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({user: "santi", password: "1234"})
})
.then(res => res.json())
.then(res => console.log(res))
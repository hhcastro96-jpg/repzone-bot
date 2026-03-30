const express = require("express");

const app = express();
app.use(express.json());

app.post("/mensaje", (req, res) => {
  const mensaje = req.body.mensaje.toLowerCase();

  let respuesta = "No entendí tu mensaje";

  if (mensaje.includes("hola")) {
    respuesta = "Hola! 🙌 Bienvenido a Repzone";
  }

  if (mensaje.includes("comprar")) {
    respuesta = "Perfecto 💪 ¿Qué producto querés?";
  }

  if (mensaje.includes("creatina")) {
    respuesta = "Tenemos creatina Star 💪 ¿Querés avanzar?";
  }

  res.json({ respuesta });
});
app.get("/", (req, res) => {
  res.send("Bot funcionando 🔥");
});
app.listen(3000, () => {
  console.log("Bot corriendo en http://localhost:3000");
});
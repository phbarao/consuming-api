const cors = require("cors");
const express = require("express");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    // Desestruturamos o DATA de dentro do RESPONSE (resposta do axios)
    const { data } = await axios("https://jsonplaceholder.typicode.com/todos");

    return res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen("4567", () => {
  console.log(">>> Server running.");
});

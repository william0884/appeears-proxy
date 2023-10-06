// server.js (Proxy Server)
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();
const port = 4000;

app.use(cors());

app.get("/api/product", async (req, res) => {
  try {
    const response = await fetch("https://appeears.earthdatacloud.nasa.gov/api/product");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});


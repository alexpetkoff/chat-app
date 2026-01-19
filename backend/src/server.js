const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/api/auth/signup", (req, res) => {
  res.send("Signup endpoint");
});

app.get("/api/auth/login", (req, res) => {
  res.send("Login endpoint");
});

app.get("/api/auth/logout", (req, res) => {
  res.send("Logout endpoint");
});

app.listen(PORT, () => console.log("Server is running on port: ", PORT));

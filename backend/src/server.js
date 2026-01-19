const express = require("express");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth.route");
const messageRoutes = require("./routes/message.route");

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => console.log("Server is running on port:", PORT));

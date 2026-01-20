const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const authRoutes = require("./routes/auth.route");
const messageRoutes = require("./routes/message.route");
const connectDB = require("./lib/db");

dotenv.config({ path: path.join(__dirname, ".env") });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  const frontEndPath = path.join(__dirname, "..", "..", "frontend", "dist");
  app.use(express.static(frontEndPath));

  app.get("*", (_, res) => {
    res.sendFile(path.join(frontEndPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
  connectDB();
});

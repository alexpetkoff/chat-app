const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const authRoutes = require("./routes/auth.route");
const messageRoutes = require("./routes/message.route");

dotenv.config({ path: path.join(__dirname, ".env") }); // point the exact path where the env is located.

const PORT = process.env.PORT || 3000;

const app = express();
const _dirname = path.resolve();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  const frontEndPath = path.join(_dirname, "..", "frontend", "dist");

  app.use(express.static(frontEndPath));

  app.get("*", (_, res) => {
    res.sendFile(path.join(frontEndPath, "index.html"));
  });
}

app.listen(PORT, () => console.log("Server is running on port:", PORT));

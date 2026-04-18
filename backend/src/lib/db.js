const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const { MONGO_URI } = process.env;
    if (!MONGO_URI) throw new Error("MONGO_URI is not set!");
    await mongoose.connect(MONGO_URI);
    console.log("MONGO DB CONNECTED...");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;

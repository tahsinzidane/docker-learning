const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
  try {
    // Connection string (use .env in real projects!)
    const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/onlineshope";

    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit process if DB connection fails
  }
};

module.exports = db;

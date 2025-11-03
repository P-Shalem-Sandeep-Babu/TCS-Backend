const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const challanRoutes = require("./routes/challanRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

const app = express();

// ✅ Use CORS with specific origin and credentials
app.use(
  cors({
    origin: "http://localhost:3000", // React app's address
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/challans", challanRoutes);
app.use("/api/auth", userRoutes);

// Start server
app.listen(5000, () => console.log("✅ Server running on port 5000"));

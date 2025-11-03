// backend/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const challanRoutes = require("./routes/challanRoutes");
const userRoutes = require("./routes/userRoutes"); // Or userRoutes.js depending on your choice

dotenv.config();
connectDB();

const app = express();

// Replace 'your-frontend-app-name' with the name you will give your frontend app on Render
app.use(cors({
  origin: ['https://traffic-challan-system.netlify.app','https://tcs-frontend-p0mv.onrender.com', 'http://localhost:3000'], // Allow both local and production
  credentials: true
}));

app.use(express.json());

app.use("/api/challans", challanRoutes);
app.use("/api/auth", userRoutes);

// --- IMPORTANT: Use Render's Port ---
const port = process.env.PORT || 5000; // Use the port provided by Render

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

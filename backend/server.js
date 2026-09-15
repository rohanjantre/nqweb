require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// ---- Middleware ----
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
  })
);

// Basic rate limiting on the contact endpoint to prevent spam/abuse
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per window
  message: {
    success: false,
    message: "Too many requests from this device. Please try again later.",
  },
});
app.use("/api/contact", contactLimiter);

// ---- Routes ----
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("NoviqWeb API is running.");
});

// ---- Connect DB then start server ----
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

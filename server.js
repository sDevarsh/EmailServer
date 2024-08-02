// server.js
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const emailRoutes = require("./routes/emailRoutes");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());

// Routes
app.use("/api", emailRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Email Scheduling API");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

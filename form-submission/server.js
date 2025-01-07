const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/formSubmissions");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a schema and model for form submissions
const submissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Submission = mongoose.model("Submission", submissionSchema);

// API endpoint to handle form submissions
app.post("/submit", async (req, res) => {
  try {
    const newSubmission = new Submission(req.body);
    await newSubmission.save();
    console.log("Submission saved successfully");
    res.status(200).send(""); // Send an empty response
  } catch (err) {
    console.error("Error saving submission:", err);
    res.status(500).send("Error saving submission");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const app = express();

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const port = process.env.port || 5000;

app.listen(port, console.log(`App is running on port ${port}`));

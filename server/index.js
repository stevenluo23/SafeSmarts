require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());
// Parse requests as JSON
app.use(express.json());

// About our API
app.get("/about", (req, res) => {
  res.send("This is an API service for CRUD actions on lesson modules. Use /lessons/:id to get a specific lesson.");
});

const lessonsRouter = require("./routes/lessons_routes");
app.use("/lessons", lessonsRouter);
const ttsRouter = require("./routes/tts_routes");
app.use("/tts", ttsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

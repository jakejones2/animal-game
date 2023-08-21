const express = require("express");
const app = express();

app.use(express.static("static/audio_samples_mp3"));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/static/index.html"));
});

const { PORT = 9090 } = process.env;

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});

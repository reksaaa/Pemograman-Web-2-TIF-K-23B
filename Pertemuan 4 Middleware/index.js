import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

let bandName = "";

function bandNameGenerator(req, res, next) {
  if (req.body && req.body["street"] && req.body["pet"]) {
    bandName = req.body["street"] + " " + req.body["pet"];
  }
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Band Name Generator</h1><p>${bandName}</p>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

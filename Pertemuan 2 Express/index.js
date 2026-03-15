import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send(`<h1>About Page</h1>`);
});

app.get("/contact", (req, res) => {
  res.send(`<h1>Contact Page</h1>`);
});

app.post("/submit", (req, res) => {
  res.send(`<h1>This is Submit Page</h1>`);
});

app.put("/update", (req, res) => {
  res.send(`<h1>Update Page</h1>`);
});

app.delete("/delete", (req, res) => {
  res.send(`<h1>Delete Page</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

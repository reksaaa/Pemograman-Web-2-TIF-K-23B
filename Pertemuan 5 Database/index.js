import express from "express";
import userController from "./controllers/user.controller.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", userController.createUser);
app.get("/users", userController.getUsers);
app.get("/users/:id", userController.getUserById);
app.put("/users/:id", userController.updateUsers);
app.delete("/users/:id", userController.deleteUsers);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

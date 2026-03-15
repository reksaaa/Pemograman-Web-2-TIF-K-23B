import express from "express";

const app = express();
const port = 3000;

let users = [
  {
    id: 1,
    name: "reksa",
    email: "reksa.ariansyah@gmail.com",
  },
  {
    id: 2,
    name: "fitri",
    email: "fitri@gmail.com",
  },
  {
    id: 3,
    name: "dian",
    email: "dian@gmail.com",
  },
  {
    id: 4,
    name: "siti",
    email: "siti@gmail.com",
  },
];
app.use(express.json());

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  const id = users.length + 1;
  users.push({ id, ...newUser });
  res.json(newUser);
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const updatedUser = req.body;
  user.name = updatedUser.name;
  user.email = updatedUser.email;
  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  users = users.filter((user) => user.id !== id);
  res.json(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

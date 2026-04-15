import db from "../db.js";

async function createUser(req, res) {
  const { username, password } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, password],
    );
    res.status(201).send(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getUsers(req, res) {
  try {
    const result = await db.query("SELECT * FROM users");
    res.status(200).send(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getUserById(req, res) {
  const { id } = req.params;

  try {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).send(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function updateUsers(req, res) {
  const { id } = req.params;
  const { username, password } = req.body;

  try {
    const result = await db.query(
      "UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *",
      [username, password, id],
    );

    res.status(200).send(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function deleteUsers(req, res) {
  const { id } = req.params;

  try {
    const result = await db.query("DELETE FROM users WHERE id = $1", [id]);
    res.status(200).send("User deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export default {
  createUser,
  getUsers,
  getUserById,
  updateUsers,
  deleteUsers,
};

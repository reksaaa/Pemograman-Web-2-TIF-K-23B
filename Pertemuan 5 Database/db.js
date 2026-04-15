import pg from "pg";

const db = new pg.Pool({
  user: "admin",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432,
});

db.connect();

export default db;

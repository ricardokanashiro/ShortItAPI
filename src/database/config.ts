import pg from "pg"

const { Pool } = pg

const pool = new Pool({
   host: "db",
   port: 5432,
   user: "postgres_user",
   password: "postgres_password",
   database: "shortItDB"
})

pool.on("connect", () => console.log("Database connection successful!"))

pool.on("error", (err) => {
   console.error("Database connection error:", err);
})

export { pool }
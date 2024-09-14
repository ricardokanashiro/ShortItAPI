import { Router } from "express"

import { pool } from "./database/config"

const routes = Router()

routes.get("/", async (req, res) => {

   await pool.query(`
      insert into links (id, fullLink, shortLink) values ($1, $2, $3)   
   `, ["123", "fullLink", "shortLink"])

   return res.send("Deu certo!")
})

export { routes }
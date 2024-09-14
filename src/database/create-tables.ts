import { pool } from "./config"

try 
{
   (async () => {
      await pool.query(`
         create table links (
            id varchar(30) not null,
            fullLink varchar(150) not null,
            shortLink varchar(50) not null,
   
            primary key (id)
         )
      `)
      
      console.log("Tabela criada com sucesso!")
   })()
} 
catch (error: any)
{
   console.log("Erro ao criar tabelas: " + error.message)
}
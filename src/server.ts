import "dotenv/config"
import app from "./app"

try {
   app.listen(process.env.PORT, () => console.log("Server listening on port " + process.env.PORT))
}
catch (error: any) {
   console.log("Error on starting server: " + error.message)
}
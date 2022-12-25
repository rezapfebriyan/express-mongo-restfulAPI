import express from "express"
import mongoose from "mongoose"

const port = 3000
const app = express()

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/restful_api", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database Connected'))

app.use(express.json())

app.listen(port, () => console.log(`Server Running in port: ${port}`))
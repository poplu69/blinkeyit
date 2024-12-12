import express, { response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from './config/connectDB.js'

const app = express()
app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
}))

app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy : false,
}))

const PORT = 8080 || process.env.PORT

app.get("/", (req, res) => {
    // Server to client
    res.json({
        message : "Server is running perfectly on PORT " + PORT
    })
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server listening on", PORT);
    })
})

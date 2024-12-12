import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

if(!process.env.MONGODB_URL) {
    throw new Error(
        "Please provide a MONGODB_URL in environment variable"
    )
}

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected successfully")
    } catch (error) {
        console.log("Mongodb connect error: ",error)
        process.exit(1)    // it the connection is not the stop the server
    }
}

export default connectDB;
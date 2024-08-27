import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js"
import dotenv from "dotenv"

const app = express();

dotenv.config()

app.use(express.json({ limit: '30mb' }));

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors())

app.use('/posts', postRoutes)

app.get('/', (req, res)=>{
  res.send("<h6>Hello from memories</h6>")
})
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(()=> app.listen(PORT, console.log(`server runing at ${PORT}`))).catch((error)=> console.log(`server fail to connect ${error}`))

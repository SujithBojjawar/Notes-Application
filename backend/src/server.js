import express from 'express';
import notesroutes from './routes/notesroutes.js';

import { connectDB } from "./database/db.js";
import dotenv from "dotenv";
import rateLimiter from './middleware/ratelimiter.js';
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesroutes);



connectDB().then(()=>
{
    app.listen(PORT,()=>{
    console.log("server started on the port:",PORT);
});
});

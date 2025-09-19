import express from 'express';
import notesroutes from './routes/notesroutes.js';


import { connectDB } from "./database/db.js";


const app = express();
app.use("/api/notes", notesroutes);
connectDB();

// app.get("/api/notes",(req,res)=>{
//     res.send("you got the notes of mern");
// });

// app.post("/api/notes",(req,res)=>{
//     res.status(201).json({messge : "notes create sucessfully"});
// });

// app.put("/api/notes",(req,res)=>{
//     res.status(200).json({messge : "notes updated  sucessfully"});
// });

// app.delete("/api/notes/:id",(req,res)=>{
//     res.status(200).json({messge : "notes deleted sucessfully"});
// });


app.listen(5001,()=>{
    console.log("server started on the port 5001");
});
import express from "express";
import {getallnotes, createnote, deletenote, updatenote } from "../controllers/notesContoller.js";



const router = express.Router();




router.get("/",getallnotes);

router.post("/",createnote);

router.put("/",updatenote);

router.delete("/:id",deletenote);

export default router;  
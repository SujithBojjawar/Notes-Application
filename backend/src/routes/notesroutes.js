import express from "express";
import {getallnotes, createnote, deletenote, updatenote, getnote, deleteallnote } from "../controllers/notesContoller.js";



const router = express.Router();




router.get("/",getallnotes);

router.get("/:id",getnote);

router.post("/",createnote);

router.put("/:id",updatenote);

router.delete("/:id",deletenote);

router.delete("/",deleteallnote);

export default router;  
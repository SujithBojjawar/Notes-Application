import Note from "../Models/Notes.js";




export async function getallnotes (req,res){
    try {
        const notes = await Note.find().sort({createdAt:-1}); //if we add here note.find().sort({createdAt:-1}); it shows the newest created notes at first else if shows the first created note at first    
        res.status(200).json(notes)
    } catch (error) {
        console.error("error in getallnotes Contoller",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function getnote(req,res){
    try {
        const note = await Note.findById(req.params.id);
        if(!note)
        {
            return res.status(404).json({message:"note not found"});
        }
        res.status(200).json({note})
    } catch (error) {
        console.error("error in getnote Contoller",error);
        res.status(500).json({message:"Internal server error"});
    }
}


export async function createnote(req,res){
    try {
        const {title,content} = req.body;
        const newNote = new Note({title,content});

        await newNote.save();
        res.status(201).json({message: "Note created sucessfully"});
    } catch (error) {
        console.error("error in createNote Contoller",error);   
        res.status(500).json({message:"Internal server error"}); 
    }
}


export async function updatenote(req,res){

    try {
        const {title,content} = req.body;
        const updatednote = await Note.findByIdAndUpdate(req.params.id,{title,content},
            {
                new:true,
            }
        );  
        if(!updatednote)
        {
            return res.status(404).json({message:"Note not found"})
        }
        res.status(200).json({updatednote})
    } catch (error) {
        console.error("error in updatingNote Contoller",error);   
        res.status(500).json({message:"Internal server error"}); 
    }
}

export async function deletenote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ success: false, message: "Note not found" });
    }

    // Send proper JSON response
    return res.status(200).json({ success: true, message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in DeletingNote Controller", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}


export async function deleteallnote(req,res){
    try {
        const Deletenote = await Note.deleteMany();
        if(Deletenote.deletedCount==0)  
        {
            return res.status(404).json({message:"Notes not found"});
        }
        res.status(200).json({message:"deleted All Note Sucessfully"});
    } catch (error) {
        console.error("error in DeletingallNote Contoller",error);   
        res.status(500).json({message:"Internal server error"});
    }
} 
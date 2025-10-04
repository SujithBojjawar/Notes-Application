import mongoose from "mongoose";




//1 create a schema
//2 create a model based on that schema 

const NSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true,
    },
    content:{
        type: String,
        required: true,
    },

},
{timestamps: true} // it automatically adds created at and updated it
);


const Note = mongoose.model("Note",NSchema)



export default Note;
import mongoose from 'mongoose';

export const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://sujithsharma340_db_user:m1zEyyzQbY9vAAFe@cluster0.rzlsm74.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ");
        console.log("Mongodb connected succesfully");
    } catch (error) {
        console.error("Connection failed",error);
    }
};


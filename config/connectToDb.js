import mongoose from "mongoose";

const connectToDb = async () => 
{
    try 
    {
          
        console.log("connected to mongoDB",process.env.MONGO_URL);
        await mongoose.connect( process.env.MONGO_URL);

      
    } 
    catch(error)
    {
        console.error("not connected to mongoDB", error);
    }
}

export default connectToDb;
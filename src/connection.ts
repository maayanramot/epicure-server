import {connect} from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGODS_URI

export const connectToDB = async () =>{
    try{
        await connect(`${uri}`)
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log("error connecting to DB",err);
}
}
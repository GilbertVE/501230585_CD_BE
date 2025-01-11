import mongoose from "mongoose";
const uri = "mongodb://127.0.0.1:27017/";

const dbName = "cd_backend";

export default function mongoConnect(){
    try {
        mongoose.connect(`${uri}${dbName}`)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
mongoose.connect(`${uri}${dbName}`)
}
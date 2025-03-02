import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
   title:{type:String, reuqired: true},
   artist:{type:String, required: true},
   imageUrl:{type:String, required:true},
   releaseYear:{type:Number , required: true},
   songs:[
    {type:mongoose.Schema.Types.ObjectId, ref:"Song"}
   ]
},{timestamps:true});
//to show createdAt or updatedAt 


export const Album = mongoose.model("Album",albumSchema)
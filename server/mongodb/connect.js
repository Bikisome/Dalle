import mongoose from "mongoose";
//const mongoose = require('mongoose');

const connectDB = (url) =>{
    mongoose.set('strictQuery',true);

    mongoose.connect(url)
    .then(()=>console.log("MongoDb conected"))
    .catch((err)=>console.log(err));
}

export default connectDB;









import mongoose from 'mongoose';
// @ts-ignore
// import { MONGO_URL } from '$env/static/private';


mongoose.connect(MONGO_URL, () => {
    console.log('Connected To Databse')
})

const reportSchema = new mongoose.Schema({
    name: String,
    email: String,
    hours: Number,
    placements: Number,
    returnVisits: Number,
    bibleStudies: Number,
    videos: Number,
    submitted: Boolean,
    admin: Boolean
   
})

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true,
    }, 
    lastLogin: {
        type: Date,
        default: () => Date.now()
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    submitted: Boolean,
})



export const Report = mongoose.model("reportModel", reportSchema)
export const User = mongoose.model("userModel", userSchema)
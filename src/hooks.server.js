import { LOCAL_MONGO_URL } from '$env/static/private';
import mongoose from 'mongoose';
// @ts-ignore


mongoose.connect(LOCAL_MONGO_URL, () => {
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
    submitted: {
        type: Boolean,
        default: false
    },
    admin: Boolean,
    fsg: Number
   
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
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
    fsg: {
        type: Number,
        required: true
    },
    submitted: {
        type: Boolean,
        default: false
    },
    privOfSer: {
        type: String,
        default: "none"
    }
})



export const Report = mongoose.model("reportModel", reportSchema)
export const User = mongoose.model("userModel", userSchema)
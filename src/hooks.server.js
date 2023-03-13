import * as dotenv from 'dotenv';

dotenv.config()

import mongoose from 'mongoose';
// @ts-ignore

async function connect() {
   await mongoose.connect(`${process.env.MONGO_URL}`)
.then(() => console.log('Connected To Databse'))
.catch((e) => console.log(e))
}

connect()

const Schema = mongoose.Schema;

const reportSchema = new Schema({
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
    fsg: Number,
    privOfSer: {
        type: String,
        default: "none"
    },
    month: String
   
})

const userSchema = new Schema({
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
    privOfSer: {
        type: String,
        default: "none"
    }
})



export const Report = mongoose.model("reportModel", reportSchema)
export const User = mongoose.model("userModel", userSchema)
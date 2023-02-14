import axios from "axios";
import * as dotenv from 'dotenv';

dotenv.config()

export async function POST({ req }) {
    let data = req.body
    console.log(data)
    axios.post('https://api.paystack.co/transaction/initialize', {
        headers: {
            Authorization: `${process.env.PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json'
        },
    })
}
import * as dotenv from 'dotenv';
dotenv.config();
let result;
/**
 * @type {Response}
 */
let apiResponse;
let name;
let amount
let email
// let response;
export const actions = {
    // @ts-ignore
    pay: async ({ request }) => {
        const data = await request.formData();
        email = data.get("email")
        name = data.get("name");
        amount = data.get("amount") * 100;
        result = await fetch("https://api.paystack.co/transaction/initialize", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            },
            body: JSON.stringify({
                email,
                name,
                amount
            })
        }).then((data) => apiResponse = data)
        // .catch((e) => console.error(e.message))
        
        // console.log(apiResponse, 'promise')
        return apiResponse.json()
    }
}
import { User, Report } from '../../hooks.server';
export const actions = {
    // @ts-ignore
    submit: async({ request }) => {
        const data = await request.formData();
        const name = data.get("name");
        const hours = data.get("hours");
        const rv = data.get("rv");
        const placements = data.get("placements");
        const bibleStudies = data.get("biblestudies")
        const videos = data.get("videos")
        const submitted = true
        const admin = data.get("role")
        const fsg = data.get("fsg")
        const month = data.get("month")
        const report = await Report.create({
            name,
            hours,
            returnVisits: rv,
            placements,
            bibleStudies,
            videos,
            submitted,
            admin,
            fsg,
            month
        })
        // @ts-ignore
        report.save()
        console.log("Report Submitted")
    },
    // @ts-ignore
    register: async({ request }) => {
        const data = await request.formData();
        const name = data.get("name").toLowerCase();
        const email = data.get("email").toLowerCase();
        // @ts-ignore
        const password = data.get("password").toLowerCase();
        const lastLogin = new Date
        const admin = data.get("adminStats").toLowerCase();
        const privOfSer = data.get("privOfSer")
        const fsg = data.get("fsg")
        const user = await User.create({
            name,
            email,
            password,
            lastLogin,
            admin,
            fsg,
            privOfSer,
            
        })
        if(!email || !name || !password){
            return {
                missing: true,
                success: false,
                incorrect: true
            }    
        } else {
            // @ts-ignore
            user.save();
            console.log("User Created")
            return {
                missing: false,
                success: true,
                incorrect: false
            }
        }
    }
}

export async function load() {
    const res = await Report.find().exec();
    const filterSubmits = await Report.countDocuments({ submitted: true})
    const regularPionners = await User.countDocuments({ privOfSer: "regular pioneer"})
    const auxPionners = await User.countDocuments({ privOfSer: "auxiliary pioneer"})
    const count = await User.countDocuments()
    return {
        rp: JSON.parse(JSON.stringify(regularPionners)),
        ap: JSON.parse(JSON.stringify(auxPionners)),
        response: JSON.parse(JSON.stringify(res)),
        filSub: JSON.parse(JSON.stringify(filterSubmits)),
        enum: JSON.parse(JSON.stringify(count))
    }
}
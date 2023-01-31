import { User, Report } from '../../hooks.server';
export const actions = {
    // @ts-ignore
    submit: async({ request }) => {
        console.log(request)
        const data = await request.formData();
        const name = data.get("name");
        const hours = data.get("hours");
        const rv = data.get("rv");
        const placements = data.get("placements");
        const bibleStudies = data.get("biblestudies")
        const videos = data.get("videos")
        const submitted = true
        const admin = data.get("role")
        const report = await Report.create({
            name,
            hours,
            returnVisits: rv,
            placements,
            bibleStudies,
            videos,
            submitted,
            admin
        })
        report.save()
        console.log("Report Submitted")
    },
    // @ts-ignore
    register: async({ request }) => {
        console.log(request)
        const data = await request.formData();
        const name = data.get("name");
        const email = data.get("email")
        const password = data.get("password")
        const lastLogin = new Date
        const admin = false
        const user = await User.create({
            name,
            email,
            password,
            lastLogin,
            admin
        })
        user.save()
        console.log("User Created")
        return {
            missing: false,
            success: true,
            incorrect: false
        }
    }
}

export async function load() {
    const res = await Report.find().exec();
    return {
        response: JSON.parse(JSON.stringify(res))
    }
}
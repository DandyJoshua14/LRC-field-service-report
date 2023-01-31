import { User, Report } from '../hooks.server';



// async function createUser() {
//     const user = await User.create({
//         name: "Dandy",
//         password: "dandy",
//         email: "dandyjoshua14@gmail.com",
//         admin: false,
//         lastLogin: new Date
//     });
//     await user.save()
//     console.log("User Saved")
// }

// createUser();

// async function createReport() {
//     const reportdetails = await Report.create({
//         name: "dandy",
//         password: "dandy",
//         admin: false,
//         hours: 30,
//         placements: 2,
//         returnVisits: 2,
//         bibleStudies: 2,
//         videos: 2,
//         submitted: false,
//     });
//     await reportdetails.save()
//     console.log("Report Saved")
// }

// createReport();

/**
 * @type {FormDataEntryValue | null}
 */
let username;
let password;
/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ request }) => {
      const data = await request.formData();
      username = data.get('name');
      password = data.get('password')
      console.log(username, 'name')
      const user = await User.findOne({ name: `${username}` });
      // @ts-ignore
      await User.updateOne({ name: `${username}`}, { $set: { lastLogin: new Date}})
      // console.log(user.name, 'Name From DataBase')
    //   cookies.set('sessionid', await db.createSession(user));
    // @ts-ignore
      if (!user || !password || password !== user.password) {
        return { 
          success: false,
          incorrect: true,
          missing: true
        };
      } else {
        return {
          userInfo: JSON.parse(JSON.stringify(user)),
          success: true,
        }
      }
    }
  };

  export async function load() {
    const res = await User.findOne({ name: `${username}`}).exec();
    const rep = await Report.find();
    console.log(rep)
    // @ts-ignore
    return {
      userInfo: JSON.parse(JSON.stringify(res)),
      reps: JSON.parse(JSON.stringify(rep)),
      success: true,
    }
  }
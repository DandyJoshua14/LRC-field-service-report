import { User, Report } from '../hooks.server';



async function createUser() {
    const user = await User.create({
        name: "dandy",
        password: "dandy123",
        email: "dandyjoshua14@gmail.com",
        admin: true,
        lastLogin: new Date,
         fsg: 3,
        privOfSer: "none"
    });
    await user.save()
    console.log("User Saved")
}

createUser();

async function createNewUser() {
  const user = await User.create({
      name: "shedrach",
      password: "shedy123",
      email: "shedy123@gmail.com",
      admin: true,
      lastLogin: new Date,
       fsg: 2,
      privOfSer: "none"
  });
  await user.save()
  console.log("User Saved")
}

createNewUser();

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
      // @ts-ignore
      username = data.get('name').toLowerCase();
      // @ts-ignore
      password = data.get('password').toLowerCase();
      const user = await User.findOne({ name: `${username}` });
      // @ts-ignore
      await User.updateOne({ name: `${username}`}, { $set: { lastLogin: new Date}})
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
    const response = await Report.findOne({ name: `${username}`});
    const rep = await Report.find();
    const users = await User.find();
    // @ts-ignore
    if(response === null) {
      return {
        respond: false,
        userInfo: JSON.parse(JSON.stringify(res)),
        reps: JSON.parse(JSON.stringify(rep)),
        users: JSON.parse(JSON.stringify(users)),
        success: true,
      }
    } else {
      return {
        respond: JSON.parse(JSON.stringify(response)),
        userInfo: JSON.parse(JSON.stringify(res)),
        reps: JSON.parse(JSON.stringify(rep)),
        users: JSON.parse(JSON.stringify(users)),
        success: true,
    }
    }
  }
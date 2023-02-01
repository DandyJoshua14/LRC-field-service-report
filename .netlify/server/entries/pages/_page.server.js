import { User, Report } from "../../chunks/hooks.server.js";
let username;
let password;
const actions = {
  login: async ({ request }) => {
    const data = await request.formData();
    username = data.get("name").toLowerCase();
    password = data.get("password").toLowerCase();
    const user = await User.findOne({ name: `${username}` });
    await User.updateOne({ name: `${username}` }, { $set: { lastLogin: new Date() } });
    if (!user || !password || password !== user.password) {
      return {
        success: false,
        incorrect: true,
        missing: true
      };
    } else {
      return {
        userInfo: JSON.parse(JSON.stringify(user)),
        success: true
      };
    }
  }
};
async function load() {
  const res = await User.findOne({ name: `${username}` }).exec();
  const rep = await Report.find();
  return {
    userInfo: JSON.parse(JSON.stringify(res)),
    reps: JSON.parse(JSON.stringify(rep)),
    success: true
  };
}
export {
  actions,
  load
};

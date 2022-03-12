import nextConnect from "next-connect";
import { ncOpt, database, mongooseDB } from "../../../lib/index";
import User from "../../../model/user.model";
const handler = nextConnect(ncOpt);
handler.use(mongooseDB);
handler.get(async (req, res) => {
  const users = await User.find({});
  return res.json({
    message: "Success",
    users,
  });
});

export default handler;

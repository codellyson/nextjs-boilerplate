import mongoose from "mongoose";
const connection = {};
export default async function mongooseDB(req, res, next) {
  if (connection.isConnected) return next();
  connection.isConnected = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("MongoDB connected");
  req.db = connection.isConnected.connection.db;
  return next();
}

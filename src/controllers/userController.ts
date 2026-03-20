import User from "../models/User.js";
import signJwt from "../helpers/sign-jwt.js";

export const login = async (req: any, res: any) => {
    const {username, password} = req.body;
    const token = signJwt({username, password});
    res.ok({token}, "Login successful");
}
export const list = async (req: any, res: any) => {
    const users = await User.find();
    res.ok(users, "Users retrieved successfully");
}
import jwt from "jsonwebtoken";
import verifyJwt from "../helpers/verify-jwt.js";
const isAuthenticated = (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];
    const partials = authHeader && authHeader.split(' ');
    if (partials && partials.length === 2 && partials[0] === 'Bearer') {
        try {
            const token = partials[1];
            const payload: any = verifyJwt(token)
            if(payload) {
                req.user = payload;
                next();
            } else {
                return res.unauthorized("Invalid or expired token");
            }
        } catch (e) {
            return res.unauthorized("Invalid or expired token");
        }
    } else {
        return res.unauthorized("Invalid Authorization header");
    }
}
export default isAuthenticated;
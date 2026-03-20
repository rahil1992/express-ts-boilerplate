import jwt from "jsonwebtoken";

const secret: any = process.env.JWT_SECRET;
const verifyJwt = (token: any) => {
    const payload = jwt.verify(token, secret)
    return payload || false
}
export default verifyJwt
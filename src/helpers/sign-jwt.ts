import jwt from 'jsonwebtoken';
const secret: any = process.env.JWT_SECRET
const signJwt = (payload: any) => {
    return jwt.sign(payload, secret, { expiresIn: '1d' });
}
export default signJwt
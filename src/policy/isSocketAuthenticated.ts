import verifyJwt from "../helpers/verify-jwt.js";
import logger from "../config/logger.js";

const isSocketAuthenticated = (socket: any, next: any) => {
    try {

        const token =
            socket.handshake.auth?.token ||
            (socket.handshake.headers?.authorization || '').replace(/^Bearer /i, '') ||
            socket.handshake.query?.token;

        if (!token) return next(new Error('Unauthorized: missing token'));0
        socket.user = verifyJwt(token);
        socket.join(socket.user.username.toString());
        return next();
    } catch (e) {
        logger.error(e);
        return next(new Error('Unauthorized: invalid or expired token'));
    }
}
export default isSocketAuthenticated;
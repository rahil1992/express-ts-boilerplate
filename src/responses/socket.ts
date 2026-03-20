import {io} from "../config/socket.js";


const socket = (req: any, res: any, next: any) => {
    res.io = {
        send: (event: string, payload: any) => {
            io.to(req.user._id).emit(event, payload);
        },
        announce: (event: string, payload: any) => {
            io.emit(event, payload);
        }
    }
    next();
}
export default socket
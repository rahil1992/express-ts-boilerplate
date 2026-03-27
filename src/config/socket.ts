import { Server } from "socket.io";
import logger from "./logger.js";
import isSocketAuthenticated from "../policy/isSocketAuthenticated.js";
let io: any;
const configureSocketServer = async (httpServer: any) => {
    logger.info("Setting up socket server")
    io = new Server(httpServer, {
        cors: {
            origin: "*",
            credentials: true,
        }
    })
    io.use(isSocketAuthenticated);
    io.on('connection', (socket: any) => {
        logger.info(`New client connected: ${socket.id}`)
        socket.on('disconnect', () => {
            logger.info(`Client disconnected: ${socket.id}`)
        })
    })
    logger.info("Socket server configured successfully")
}

export {
    configureSocketServer,
    io
}
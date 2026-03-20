import { Server } from "socket.io";
import logger from "./logger.js";
let io: any;
const configureSocketServer = async (httpServer: any) => {
    logger.info("Setting up socket server")
    io = new Server(httpServer, {
        cors: {
            origin: "*",
            credentials: true,
        }
    })
    logger.info("Socket server configured successfully")
}

export {
    configureSocketServer,
    io
}
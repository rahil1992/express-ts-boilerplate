import logger from "../config/logger.js";
import {Express} from "express";
import ok from "./ok.js";
import badRequest from "./badRequest.js";
import unauthorized from "./unauthorized.js";
import socket from "./socket.js";

const setResponses = async (app: Express) => {
    logger.info("Setting up responses...")
    app.use(ok);
    app.use(badRequest);
    app.use(unauthorized);
    app.use(socket);
    logger.info("Responses set up successfully")
}
export default setResponses;
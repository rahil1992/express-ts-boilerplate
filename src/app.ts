import "dotenv/config"
import http from "http"
import type {Express} from "express";
import express from "express";
import connectToMongoDB from "./config/mongodb.js";
import configure from "./config/index.js";
import {configureSocketServer} from "./config/socket.js";
import logger from "./config/logger.js";
import setResponses from "./responses/index.js";
import initializeTasks from "./tasks/index.js";
import initializeRoutes from "./routes/index.js";

const app: Express = express();
configure(app);
await setResponses(app);
await connectToMongoDB();
await initializeTasks();
const server = http.createServer(app)
await configureSocketServer(server);
await initializeRoutes(app);
server.listen(process.env.PORT, () => {
    logger.info(`Server is running on port ${process.env.PORT}`);
})
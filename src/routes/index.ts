import {Express, Router} from "express";
import logger from "../config/logger.js";
import initializeUserRoutes from "./userRouter.js";

const router = Router();
const initializeRoutes = async (app: Express) => {
    logger.info("Initializing routes...")
    app.use("/user", initializeUserRoutes(router))
}
export default initializeRoutes
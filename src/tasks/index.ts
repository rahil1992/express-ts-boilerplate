import logger from "../config/logger.js";
import nodeCron from "node-cron";
import notificationEngine from "./notificationEngine.js";

const initializeTasks = async () => {
    logger.info("Initializing tasks");
    nodeCron.schedule("5 * * * * *", notificationEngine)
}
export default initializeTasks;
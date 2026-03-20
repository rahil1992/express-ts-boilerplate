import * as mongoose from "mongoose";
import logger from "./logger.js";
const connectToMongoDB = async () => {
    logger.info("connecting to MongoDB...")
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        logger.info("Connected to MongoDB");
    } catch (error) {
        logger.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}
export default connectToMongoDB;
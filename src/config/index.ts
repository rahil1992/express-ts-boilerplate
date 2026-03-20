import express, { Application } from "express";
import httpCors from "./http-cors.js";
import options from "./options.js";
import bodyParser from "body-parser";
import logger from "./logger.js";

const configure = (app: Application) => {
    logger.info("Configuring Express application...")
    app.use(express.json(options))
    app.use(httpCors)
    app.use(bodyParser.json())
    app.use(express.urlencoded({ extended: true }))
}
export default configure;
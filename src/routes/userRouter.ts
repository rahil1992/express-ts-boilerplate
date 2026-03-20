import {Router} from "express";
import logger from "../config/logger.js";
import {list, login} from "../controllers/userController.js";
import validator from "../validators/index.js";
import isAuthenticated from "../policy/isAuthenticated.js";

const initializeUserRoutes = (router: Router) => {
    logger.info("Initializing user routes");
    router.post("/login",validator.userLoginRequest, login)
    router.get('/', isAuthenticated, list)
    return router;
}
export default initializeUserRoutes;
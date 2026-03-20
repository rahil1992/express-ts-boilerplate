import {body} from "express-validator";

export const loginRequestValidator = (handler: any) => {
    return [
        body("username").notEmpty().withMessage("Username is required"),
        body("password").notEmpty().withMessage("Password is required"),
        handler
    ]
}
import {validationResult} from "express-validator";
import {loginRequestValidator} from "./user.js";

const handler = (req: any, res: any, next: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.badRequest(errors);
    }
    next();
}
const validator = {
    userLoginRequest: loginRequestValidator(handler)
}
export default validator;
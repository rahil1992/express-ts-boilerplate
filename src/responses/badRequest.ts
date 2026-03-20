const badRequest = (req: any, res: any, next: any) => {
    res.badRequest = (message = 'Bad Request', status = 400) => {
        res.status(status).json({
            status,
            message
        })
    }
    next();
}
export default badRequest;
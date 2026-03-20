const unauthorized = (req: any, res: any, next: any) => {
    res.unauthorized = (data: any, message = 'Unauthorized', status = 401) => {
        res.status(status).json({
            status,
            message,
            data
        })
    }
    next();
}
export default unauthorized;
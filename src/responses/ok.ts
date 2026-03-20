const ok = (req: any, res: any, next: any) => {
    res.ok = (data: any, message = 'Success', status = 200) => {
        req.body
        res.status(status).json({
            status,
            message,
            data
        })
    }
    next();
}
export default ok;
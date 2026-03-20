import { createLogger, format, transports } from "winston"
import DailyRotateFile from "winston-daily-rotate-file"
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json(),
    ),
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.printf(({ level, message, timestamp }: any) => {
                    return `${timestamp} | ${level} | ${message}`;
                })
            )
        }),
        new DailyRotateFile({
            filename: 'logs/%DATE%.log',
            level: 'info',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '10m',
            maxFiles: '14d',
            format: format.combine(
                format.timestamp(),
                format.json(),
            ),
        })
    ]
})

export default logger;
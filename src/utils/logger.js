const fs = require('fs');
const path = require('path');
const winston = require('winston');

const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: path.join(logDir, 'app.log') }),
        new winston.transports.Console()
    ],
});

const requestLogger = (req, res, next) => {
    logger.info({
        method: req.method,
        url: req.url,
        body: req.body,
        timestamp: new Date().toISOString(),
    });
    next();
};

module.exports = { logger, requestLogger };

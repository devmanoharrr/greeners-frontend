import winston from 'winston';

// Define the logger configuration
const logger = winston.createLogger({
    transports: [
        // Log errors to error.log
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        // Log all messages to combined.log
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

// Export the logger for use in other parts of the application
export default logger;

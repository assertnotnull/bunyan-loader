var bunyan = require('bunyan');
var cachedLogger;

/**
 * @param config
 * @returns bunyan
 */
module.exports = function (config) {
    if (cachedLogger)
        return cachedLogger;

    cachedLogger = bunyan.createLogger(config);

    process.on('uncaughtException', function (err) {
        cachedLogger.error(err);
    });
    return cachedLogger;
};
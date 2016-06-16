var bunyan = require('bunyan');
var cachedLogger;

/**
 * @param config
 * @returns bunyan
 */
module.exports = function (config) {
    if (cachedLogger)
        return cachedLogger;

    cachedLogger = bunyan.createLogger({
        name: config.name,
        serializers: bunyan.stdSerializers,
        streams: config.streams
    });

    process.on('uncaughtException', function (err) {
        cachedLogger.error(err);
    });
    return cachedLogger;
};
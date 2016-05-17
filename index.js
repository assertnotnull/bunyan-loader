var bunyan = require('bunyan');
var cluster = require('cluster');
var cachedLogger;

/**
 * @param config
 * @returns bunyan
 */
module.exports = function (config) {
    if (cachedLogger)
        return cachedLogger;
    var stream = [];
    var logExtension = '.log';

    if (process.env.NODE_ENV == 'development') {
        stream.push({
            level: config.log.console.level,
            stream: process.stdout
        });
        stream.push({
            level: config.log.fileinfo.level,
            type: 'file',
            path: config.log.fileinfo.filename + logExtension
        });
    } else {
        stream.push({
            level: config.log.fileinfo.level,
            type: 'file',
            path: config.log.fileinfo.filename + process.pid + logExtension
        });
    }

    cachedLogger = bunyan.createLogger({
        name: config.log.name,
        serializers: bunyan.stdSerializers,
        streams: stream
    }); //global logger

    process.on('uncaughtException', function (err) {
        cachedLogger.error(err);
    });
    return cachedLogger;
};
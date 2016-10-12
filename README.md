# Bunyan loader

Provides a simple way to cache the bunyan instance.

Also automatically sends uncaught exceptions to logged by bunyan

It passes the config of bunyan
```
var bunyanconfig = {
        name: 'myapp',
        streams: [{
            level: 'INFO',
            stream: process.stdout
        }]
    };
```
See: https://github.com/trentm/node-bunyan#constructor-api

Instantiate once using

```
var bunyan = require('bunyan-loader')(bunyanconfig);
bunyan.info('i am logging')
```

Then reuse it in other modules by calling require without the config:

```
var logger = require('bunyan-loader')()
logger.info('blabla')`
```

`var childlogger = logger.child({'scope': 'mycurrentfile'}); childlogger.info('i have more properties!')`

## How to use:
- using the local bunyan: `NODE_ENV=development nodemon server.js|./node_modules/.bin/bunyan`
- using global bunyan: `NODE_ENV=development nodemon server.js|bunyan`

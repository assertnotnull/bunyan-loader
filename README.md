# Bunyan loader

Provides a simple common way to load bunyan.

A config file containing such structure is needed:
```
config.log = {
	name: 'myapp',
	console: {
		level: 'INFO'
	},
	fileinfo: {
		filename: './myapp',
		level: 'INFO'
	}
};
```

Instantiate once using

```
var bunyan = require('bunyan-loader')(config)
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

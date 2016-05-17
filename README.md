# Bunyan loader

Provides a simple common structure to load bunyan.

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

`var bunyan = require('bunyan-loader')(config);`

Then can be used anywhere like this:

- `bunyan.info('blabla')`
- `var childlogger = bunyan.child({'scope': 'mycurrentfile'}); childlogger.info('i have more properties!')`

## How to use:
- using the local bunyan: `NODE_ENV=development nodemon server.js|./node_modules/.bin/bunyan`
- using global bunyan: `NODE_ENV=development nodemon server.js|bunyan`

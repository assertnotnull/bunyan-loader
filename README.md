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
`require('bunyan-loader')(config);`

will provide:
- a variable in global scope (glogger) to instantiate child loggers from bunyan.child()
  - ex: `var logger = glogger.child({scope: 'myclass');`
- a default logging to file (name.pid.log) in environment other than development

## How to use:
- using the local bunyan: `NODE_ENV=development nodemon server.js|./node_modules/.bin/bunyan`
- using global bunyan: `NODE_ENV=development nodemon server.js|bunyan`

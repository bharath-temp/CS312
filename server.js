var http = require('http');
http.createServer(function (request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('# Simple NodeJS Hello World server\nFROM alpine:latest\n# During Build: Install the NodeJS runtime by running this command in the image\nRUN apk -U add nodejs\n# During build: Copy the server JS file into the image, store it at this location\nCOPY server.js /srv/server.js\nCOPY Dockerfile /srv/Dockerfile\n# Expose the port 8080 for HTTP \nEXPOSE 8081\n# Run this command by default when containers spawned from this image start \nCMD node /srv/server.js');
}).listen(8082);
console.log('Server started');
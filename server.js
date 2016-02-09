var http = require('http')
var requestHandler = function(request, response) {
  var body = 'Hello World\n'
  response.writeHead(200, 'ok', {
    'Content-Length': body.length,
    'Content-Type': 'text/plain' })
  response.end(body)
}
var server = http.createServer(requestHandler)
server.listen(3000)
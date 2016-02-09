# Enhancing Hello World Server

## Objectives

1. Add response Content-Type header to your Hello World server
1. Add response Content-Length header to your Hello World server
1. Test headers with DevTools or CURL

## Introduction

In this lab, you'll use `writeHead()` to send back the proper response header.

## Instructions

1. Create `server.js`
2. In `server.js` implement http server with `createServer`
3. Use named function `requestHandler` as the request handler for the server
4. Output "Hello World\n" (`\n` is for the new line) - `body`
5. Add Content-Type `text/plain` and Content-Lenght of `body.length` with `writeHead()`
6. Write status 200 and message `ok` in the response header
5. Start the server with `$ node server` and test with CURL `-v` or with Postman
8. Run tests with `npm install && npm test`



### Extra Info

1. [Header Field Definitions specification](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
2. [List of HTTP header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
1. [request headers official documentation](https://nodejs.org/api/http.html#http_message_headers)
1. [writeHead official documentation](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers)
2. [HTTP - Setting Content-Type header video](https://www.youtube.com/watch?v=P6MHXU2Vu1s)
3. [CURL for Windows](http://www.confusedbycode.com/curl)
3. [Postman Chrome app](http://www.getpostman.com)
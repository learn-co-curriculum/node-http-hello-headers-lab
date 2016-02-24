# Enhancing Hello World Server

## Objectives

1. Add response Content-Type header to your Hello World server
1. Add response Content-Length header to your Hello World server
1. Test headers with DevTools or CURL

## Introduction

The Internet is a collection of servers and clients. Clients send requests and servers provide responses. You all know that. What some of you don't know is that responses can vary in type and other characteristics. Most of us don't know it because browsers (i.e., clients) do a great deal of interpreting the right way to handle each type of the response. The automatic interpreter is powerless when there are feasible cases for two (or more) types. Maybe you want to get a text which is HTML or maybe you want the HTML to be rendered in the browser as a web page:

```
<html>
  <body>
    <h1>Node is Awesome!</h1>
  </body>
</html>
```

Headers help to determine the type of the content. They also contain other important information like authentication, body length, compression type, encoding, and many other things. All them help clients to process the response faster and better.

In this lab, you'll use `writeHead()` to send back the proper response headers to the client.

## Instructions

1. Create `server.js`
1. In `server.js` implement http server with `createServer`
1. Use named function `requestHandler` as the request handler for the server
1. Output "Hello World\n" (`\n` is for the new line) - `body`
1. Add Content-Type `text/plain` and Content-Lenght of `body.length` with `writeHead()`
1. Write status 200 and message `ok` in the response header
1. Start the server with `node server` and test with CURL `-v` or with Postman
1. Run tests with `npm install && npm test`



### Extra Info

1. [Header Field Definitions specification](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
2. [List of HTTP header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
1. [request headers official documentation](https://nodejs.org/api/http.html#http_message_headers)
1. [writeHead official documentation](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers)
2. [HTTP - Setting Content-Type header video](https://www.youtube.com/watch?v=P6MHXU2Vu1s)
3. [CURL for Windows](http://www.confusedbycode.com/curl)
3. [Postman Chrome app](http://www.getpostman.com)om)
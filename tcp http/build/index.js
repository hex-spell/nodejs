"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var port = 3000;
var net = require("net");
var server = net.createServer(function (socket) {
    socket.on("connect", function () {
        console.log("connected");
        socket.on("data", function (data) {
            console.log(data);
            socket.send("HTTP/1.1 200 OK\n        Date: Sun, 18 Oct 2009 08:56:53 GMT\n        Server: Apache/2.2.14 (Win32)\n        Last-Modified: Sat, 20 Nov 2004 07:16:26 GMT\n        ETag: \"10000000565a5-2c-3e94b66c2e680\"\n        Accept-Ranges: bytes\n        Content-Length: 44\n        Connection: close\n        Content-Type: text/html\n        X-Pad: avoid browser bug\n          \n        <html><body><h1>It works!</h1></body></html>");
        });
    });
});
server.listen(port);

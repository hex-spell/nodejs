import { Socket } from "net";

const fs = require("fs");

const port = 3000;

const path = require("path");

const net = require("net");

const server = net.createServer((socket: Socket) => {
  socket.on("connection", () => {
    console.log("connected");
  });
  socket.on("data", (data: Buffer) => {
    console.log(data.toString());
    fs.readFile(
      path.join(__dirname, "index.html"),
      {
        encoding: "utf8",
        flag: "r",
      },
      (err: Error, data: Buffer) => {
        if (err) throw err;
        const html = data.toString();
        const parsedhtml = html.replace(/\r/g, "\r\n");
        socket.write(
          "HTTP/1.1 200 OK\r\nDate: Sat, 19 Sep 2020 08:23:52 GMT\r\nServer: Apache\r\nConnection: close\r\nContent-Type: text/html; charset=UTF-8\r\n" +
            parsedhtml,
          "utf8",
          () => socket.end()
        );
      }
    );
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log("server started");
});

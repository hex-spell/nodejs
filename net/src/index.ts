import { Socket } from "net";
import { Stream } from "stream";

const net = require("net");

const port = 3000;

const clients = new Set<Socket>();

const server = net.createServer((c: Socket) => {
  clients.add(c);
  console.log("client connected");
  c.on("data", (data: Stream) => {
      const message = data.toString();
    clients.delete(c);
    clients.forEach((client: Socket) => client.write(`${c.remoteAddress} : ${message}\n`));
    clients.add(c);
  });
  c.on("end", () => {
    clients.delete(c);
    console.log("client disconnected");
  });
  c.write("bienvenido al server\r\n");
});

server.listen(port);

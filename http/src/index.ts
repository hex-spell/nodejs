import { IncomingMessage, ServerResponse } from "http";

const http = require("http");

const port = 3000;

const Router = require("./routes");

const Handler = (req: IncomingMessage, res: ServerResponse) => {
  Router.dispatch(req, res);
};

const server = http.createServer(Handler);

server.listen(port);

server.on("connection", () => console.log(`server listening on ${port}`));

import { IncomingMessage, ServerResponse } from "http";

const dispatcher = require("./dispatcher");
const db = require("./database");

let Router = new dispatcher();

Router.get("/contacts", (req: IncomingMessage, res: ServerResponse) => {
  db.query("SELECT * FROM CONTACTS", (err: any, result: any) => {
    if (err) {
      res.write("error de base de datos");
      res.end();
    } else {
      res.setHeader("content-type", "application/json");
      res.write(JSON.stringify(result));
      res.end();
    }
  });
});

Router.get("/users", (req: IncomingMessage, res: ServerResponse) => {
  db.query("SELECT * FROM USERS", (err: any, result: any) => {
    if (err) {
      res.write("error de base de datos");
      res.end();
    } else {
      res.setHeader("content-type", "application/json");
      res.write(JSON.stringify(result));
      res.end();
    }
  });
});

Router.get("/products", (req: IncomingMessage, res: ServerResponse) => {
  db.query("SELECT * FROM PRODUCTS", (err: any, result: any) => {
    if (err) {
      res.write("error de base de datos");
      res.end();
    } else {
      res.setHeader("content-type", "application/json");
      res.write(JSON.stringify(result));
      res.end();
    }
  });
});

Router.get("/transactions", (req: IncomingMessage, res: ServerResponse) => {
  db.query("SELECT * FROM TRANSACTIONS", (err: any, result: any) => {
    if (err) {
      res.write("error de base de datos");
      res.end();
    } else {
      res.setHeader("content-type", "application/json");
      res.write(JSON.stringify(result));
      res.end();
    }
  });
});

module.exports = Router;

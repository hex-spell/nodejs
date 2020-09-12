import { IncomingMessage, ServerResponse } from "http";

class dispatcher {
    public listener : any = { get: { } };
    get (url:string, callback:(req: IncomingMessage, res: ServerResponse)=>void) {
        this.listener.get[url] = callback;
    }
    dispatch (req: IncomingMessage, res: ServerResponse){
        let method = req.method? req.method.toLowerCase() : "get";
        let url = req.url? req.url : "/";
		if(this.listener[method][url]) this.listener[method][url](req, res)
    }
}
module.exports = dispatcher;
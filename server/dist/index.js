"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const Auth_1 = __importDefault(require("./Controller/Auth"));
// dotenv.config();
const port = 8080;
const wss = new ws_1.WebSocketServer({ port });
wss.on("connection", (ws) => {
    //connection is up, let's add a simple simple event
    ws.on("message", (message) => {
        //log the received message and send it back to the client
        //Parse JSON
        const data = JSON.parse(message);
        console.log("received: %s", data);
        (0, Auth_1.default)(ws, data);
    });
    //send immediatly a feedback to the incoming connection
    ws.send("Hi there, I am a WebSocket server");
});

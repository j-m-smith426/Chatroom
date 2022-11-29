import ServerController from "../Classes/ServerController";
import WebSocket from "ws";
import { WSRequest, WSResponse } from "../interfaces/interfaces";

export enum AuthOptions {
	"Connect",
	"Disconnect",
}

const AuthHandler = (ws: WebSocket, req: WSRequest) => {
	const Server = ServerController.getController();
	if (!Server) {
		throw new Error("Error accessing Server");
	}
	switch (req.method) {
		case "Connect":
			const response: WSResponse = ServerController.addClient(ws, req);
			const data = JSON.stringify(response);
			ws.send(data);
			break;
		case "Disconnect":
			ws.send("Disconnected");
			break;
		default:
			throw new Error("Error handling Auth Method");
	}
};

export default AuthHandler;

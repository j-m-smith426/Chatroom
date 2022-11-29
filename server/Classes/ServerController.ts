import { WSRequest, WSResponse } from "../interfaces/interfaces";
import { v4 as uuidv4 } from "uuid";
import Channel from "./Channel";
import { WebSocket } from "ws";

interface IClient {
	id: string;
	ws: WebSocket;
}

class ServerController {
	private static controller: ServerController;
	private static channelArray: Channel[] = [];
	private static Clients: IClient[] = [];
	private constructor() {
		console.log("ServerController Instantiated");
	}

	//Get list of channels
	public static getChannels(): Channel[] {
		return this.channelArray;
	}

	//Add channel
	private static addChannel() {
		this.channelArray.push(new Channel());
	}

	//Get instance of ServerController or create if not instanciated
	public static getController() {
		if (!ServerController.controller) {
			ServerController.controller = new ServerController();
		}

		return ServerController.controller;
	}

	public static addClient(ws: WebSocket, request: WSRequest): WSResponse {
		const id = request.ID || uuidv4();
		if (!this.Clients.find((obj) => obj.id === id)) {
			this.Clients.push({ id, ws });
		}

		const response: WSResponse = {
			Type: "Connected",
			Name: "",
			ID: id,
			Message: "You are connected",
		};

		return response;
	}
	//     function ping() {
	//         ws.send('__ping__');
	//         tm = setTimeout(function () {

	//            /// ---connection closed ///

	//     }, 5000);
	// }

	// function pong() {
	//     clearTimeout(tm);
	// }
	// websocket_conn.onopen = function () {
	//     setInterval(ping, 30000);
	// }
	// websocket_conn.onmessage = function (evt) {
	//     var msg = evt.data;
	//     if (msg == '__pong__') {
	//         pong();
	//         return;
	//     }
	//     //////-- other operation --//
	// }
}

export default ServerController;

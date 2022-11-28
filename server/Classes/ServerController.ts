import Channel from "./Channel";

class ServerController {
	private static controller: ServerController;
	private static channelArray: Channel[] = [];
	private constructor() {
		console.log("ServerController Instantiated");
	}

	public static getController() {
		if (!ServerController.controller) {
			ServerController.controller = new ServerController();
		}

		return ServerController.controller;
	}
}

export default ServerController;

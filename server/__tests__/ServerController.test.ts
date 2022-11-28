import ServerController from "../Classes/ServerController";

describe("ServerController ", () => {
	test("it should retreive instance", () => {
		const controller = ServerController.getController();
		expect(controller).not.toBeFalsy();
	});
});

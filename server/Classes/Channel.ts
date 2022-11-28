class Channel {
	private channelID: String;
	constructor() {
		this.channelID = this.generate();
	}

	//create CheannelID
	private generate(): String {
		return "test";
	}
}

export default Channel;

import { AuthOptions } from "../Controller/Auth";
import { ChannelOptions } from "../Controller/Channels";
import { UserOptions } from "../Controller/User";

export interface WSRequest {
	Type: string; //make enum
	method: string;
	Name: string; //username
	ID?: string; //clientID
}

export interface WSResponse {
	Type: string; //make enum
	Name: string; //username
	ID: string; //clientID
	Message: string; //message
}

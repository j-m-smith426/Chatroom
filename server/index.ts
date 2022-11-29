import express, { Express, Request, Response } from "express";
import WebSocket, { WebSocketServer } from "ws";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import AuthHandler from "./Controller/Auth";

// dotenv.config();

const port = 8080;

const wss = new WebSocketServer({ port });

wss.on("connection", (ws: WebSocket) => {
	//connection is up, let's add a simple simple event
	ws.on("message", (message: string) => {
		//log the received message and send it back to the client
		//Parse JSON
		const data = JSON.parse(message);
		console.log("received: %s", data);
		try {
			switch (data.Type) {
				case "Auth":
					AuthHandler(ws, data);
					break;
				case "Channel":
					//tbd
					break;
				case "User":
					//tbd
					break;
				default:
					throw new Error("Invalid Type");
			}
		} catch (err) {
			ws.send(err);
		}
	});

	//send immediatly a feedback to the incoming connection
	ws.send("Hi there, I am a WebSocket server");
});

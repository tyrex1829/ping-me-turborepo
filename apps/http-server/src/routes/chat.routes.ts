import express from "express";
import { chat } from "../controller/chat.controller";

export const chat_router: express.Router = express.Router();

chat_router.use("/chat", chat);

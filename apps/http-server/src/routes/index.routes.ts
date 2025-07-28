import express, { Router } from "express";
import { auth_router } from "./auth.routes";
import { chat_router } from "./chat.routes";

export const index_router: express.Router = Router();

index_router.use("/auth", auth_router);
index_router.use("/chat", chat_router);

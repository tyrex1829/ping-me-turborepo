import express from "express";
import { me, signin, signup } from "../controller/auth.controller";

export const auth_router: express.Router = express.Router();

auth_router.post("/signup", signup);
auth_router.post("/signin", signin);
auth_router.get("/me", me);

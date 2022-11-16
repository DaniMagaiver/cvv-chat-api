import { Router } from "express";
import ChatController from "../controllers/Chat.controller";

const chatsRoute = Router();

chatsRoute.get("/queue", ChatController.chatQueue.bind(ChatController));

export default chatsRoute;

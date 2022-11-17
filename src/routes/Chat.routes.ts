import { Router } from "express";
import ChatController from "../controllers/Chat.controller";

const chatsRoute = Router();

chatsRoute
  .post("/queue", ChatController.chatQueue.bind(ChatController))
  .post("/create", ChatController.createChatRoom.bind(ChatController));

export default chatsRoute;

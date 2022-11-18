import { Request, Response } from "express";
import { ChatService } from "../services";
import { v4 } from "uuid";
import { Chat } from "../models";

export default class ChatController {
  static async createChatRoom(request: Request, response: Response) {
    try {
      const chatService = new ChatService();

      const chat = new Chat();
      chat.createdAt = new Date(Date.now());
      chat.roomId = v4();
      chat.status = "open";

      await chatService.create(chat);
      return response.status(200).json(chat);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }

  static async chatQueue(request: Request, response: Response) {
    try {
      const chatService = new ChatService();

      const { volunteerId } = request.body;
      const [firstPatient] = await chatService.firstQueue();
      firstPatient.volunteerId = volunteerId;
      firstPatient.status = "inAttendance";
      console.log(firstPatient);
      await chatService.update(firstPatient._id.toString(), firstPatient);
      return response.status(200).json(firstPatient);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

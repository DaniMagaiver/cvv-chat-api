import { Request, Response } from "express";

export default class ChatController {

  static async chatQueue(request: Request, response: Response) {
    try {
        return response.status(200).json({message: "Chatqueue works!"});
    } catch (error) {}
  }

}

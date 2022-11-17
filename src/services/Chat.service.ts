import { Chat } from "../models";
import Service from "./Service";
import database from "../database";

export default class ChatService extends Service<Chat> {
  constructor() {
    super(database.getMongoRepository(Chat));
  }

  firstQueue() {
    return this.query({
      where: { status: "open" },
      order: { createdAt: -1 },
      take: 1,
    });
  }
}

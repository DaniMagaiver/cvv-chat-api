import { Socket } from "socket.io";

//TODO: Implementar fila
import {} from "../services";
export default class RoomsListener {
  static onConnect(socket: Socket) {
    const roomId = socket.handshake.query.roomId as string;
    socket.join(roomId);
    socket.on("message", this.onMessage(roomId, socket));
  }

  private static onMessage(roomId: string, socket: Socket) {
    return async (message: { to: string; from: string; content: string }) => {
      socket.to(roomId).emit("message", message);
    };
  }
}

import { Socket } from "socket.io";

//TODO: Implementar fila

export default class RoomsListener {
  static onConnect(socket: Socket) {

    socket.on("message", this.onMessage(socket));
  }

  private static onMessage(socket: Socket) {
    return async (socketId: string, message: string) => {
      socket.to(socketId).emit("message", "Hello darling!");
    };
  }
}

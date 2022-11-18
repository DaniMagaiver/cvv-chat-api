import cors from "cors";
import server from "./server";
import { Server } from "socket.io";
import { RoomsListener } from "./listeners";

const io = new Server(server, {
  cors: {
    allowedHeaders: "GET, POST, OPTIONS, PUT, DELETE",
    origin: process.env.EXPRESS_ALLOW_ORIGIN,
  },
});
io.of("/rooms").on("connect", RoomsListener.onConnect.bind(RoomsListener));

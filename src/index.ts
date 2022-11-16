import server from "./server";
import { Server } from "socket.io";
import { RoomsListener } from "./listeners";

const io = new Server(server);
io.of("/rooms").on("connect", RoomsListener.onConnect.bind(RoomsListener));

import express from "express";
import cors from "cors";
import database from "./database";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

console.log(`\nConectando a base de chat ⚆_⚆...\n`);
database
  .initialize()
  .then(() => {
    console.log(`\nConectado com sucesso a base de chat ~(￣▽￣)~*!\n`);
  })
  .catch((error) => {
    console.log(`\nHouve um erro ao conectar a base de chat (T_T).`);
    console.error(error);
  });

const door = process.env.EXPRESS_DOOR;

const server = app.listen(door, () => {
  console.log(`\nServidor de chat rodando na porta ${door} (～￣▽￣)～!\n`);
});

export default server;

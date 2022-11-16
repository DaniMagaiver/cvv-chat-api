import cors from "cors";
import { Router } from "express";
import chatRoutes from "./Chat.routes";

const router = Router();

router.use(
  cors({
    allowedHeaders: "GET",
    origin: process.env.EXPRESS_ALLOW_ORIGIN,
  })
);

router.use("/chat", chatRoutes);

export default router;

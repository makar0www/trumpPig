import Fastify from "fastify";
import * as dotenv from "dotenv";
import cors from "@fastify/cors";

dotenv.config();

import telegramRoutes from "./routes/telegram";
import memesRoutes from "./routes/memes";

const fastify = Fastify({ logger: true });

// CORS: пока что разрешаем всем (для MVP).
// Для продакшена лучше ограничить origin конкретным доменом фронта.
fastify.register(cors, {
  origin: true,
});

fastify.register(telegramRoutes, { prefix: "/api" });
fastify.register(memesRoutes, { prefix: "/api" });

const PORT = process.env.PORT || 3000;

fastify.listen(
  { port: Number(PORT), host: "0.0.0.0" },
  (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log("🚀 Server started on " + address);
  }
);



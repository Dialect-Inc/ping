import fastify from "fastify";
import cors from '@fastify/cors'
import { execa } from "execa";

execa("pnpm", ["exec", "http-server", "--port=8080"], { stdio: "inherit" });

const app = fastify();
app.register(cors)

let count = 1

app.get("/ping", (request, reply) => {
  reply.send(`pong ${count++}!`);
});

app.listen({ port: 4000 }, () => {
  console.log("Listening on port 4000");
});

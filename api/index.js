import cors from "@fastify/cors";
import Fastify from "fastify";
import { books, storeBook } from "./controllers/bookController.js";
import ApiResponse from "./utils/api-response.js";

const app = Fastify({
	logger: true,
});
await app.register(cors, {
	origin: true
});

app.get("/", async (_, reply) => {
	reply.code(200).send(ApiResponse(200, "Selamat datang di UTS IF31"));
});

app.get("/api/books", books);
app.post("/api/books", storeBook);

export default async function handler(req, reply) {
	await app.ready();
	app.server.emit("request", req, reply);
}

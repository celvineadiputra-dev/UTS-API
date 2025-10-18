import z from "zod";
import db from "../database/database.js";
import { booksTable } from "../database/db/schema.js";
import ApiResponse from "../utils/api-response.js";
import StoreBook from "../validation/store-book.js";

export const books = async (_, reply) => {
	const books = await db.select().from(booksTable);
	reply.code(200).send(ApiResponse(200, "Books", books));
};

export const storeBook = async (request, reply) => {
	try {
        const {
            title,
            author,
            published_year
        } = request.body

        const form = StoreBook.safeParse({
            title,
            author,
            published_year
        })

        if(!form.success) {
            return reply.code(402).send(
                ApiResponse(402, "Validation error", z.flattenError(form.error)?.fieldErrors)
            )
        }
        
        const newBook = await db.insert(booksTable).values(form.data).returning()
        
		reply.code(201).send(ApiResponse(201, "Success store new book", newBook));
	} catch (error) {
        console.log(error);
        
		reply
			.code(500)
			.send(ApiResponse(500, error.message));
	}
};

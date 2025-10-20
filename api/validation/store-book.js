import z from "zod";

const StoreBook = z.object({
	title: z.string("Title is required"),
	author: z.string("Author is required"),
	published_year: z.string("Published Year is required"),
});

export default StoreBook
import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const booksTable = pgTable("books", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	title: varchar({ length: 255 }).notNull(),
	author: varchar({ length: 255 }).notNull(),
	published_year: integer().notNull(),
	created_at: timestamp().defaultNow(),
	updated_at: timestamp().defaultNow(),
});

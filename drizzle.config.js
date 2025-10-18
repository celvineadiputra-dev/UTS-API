import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { DATABASE_URL } from './src/config/db';

export default defineConfig({
  out: './drizzle',
  schema: './src/database/db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: DATABASE_URL,
  },
});

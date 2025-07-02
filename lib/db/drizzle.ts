import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// For NeonDB, use SSL
const connectionString = process.env.DATABASE_URL;
export const client = postgres(connectionString, { ssl: 'require' });
export const db = drizzle(client, { schema });

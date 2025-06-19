// Make sure to install the 'pg' package
import { drizzle } from 'drizzle-orm/node-postgres';

import { usersTable } from './db/schema';

// You can specify any property from the node-postgres connection options
const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
    // ssl: true,
  },
});

// const result = await db.execute('select 1');

export async function getUsers() {
  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users);
  return users;
}

// getUsers();

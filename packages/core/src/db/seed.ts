import { drizzle } from 'drizzle-orm/node-postgres';
import { seed } from 'drizzle-seed';

import { usersTable } from './schema';

const users = usersTable;

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);
  await seed(db, { users });
}

main();

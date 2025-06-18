import * as fs from 'node:fs';
import { getUsers } from '@koei/core';
import { Button } from '@koei/ui';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';

const filePath = 'count.txt';

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, 'utf-8').catch(() => '0')
  );
}

const getCount = createServerFn({
  method: 'GET',
}).handler(() => {
  return readCount();
});

const getUsersFn = createServerFn({
  method: 'GET',
}).handler(() => {
  return getUsers();
});

const updateCount = createServerFn({ method: 'POST' })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount();
    await fs.promises.writeFile(filePath, `${count + data}`);
  });

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => ({ count: await getCount(), users: await getUsersFn() }),
});

function Home() {
  const router = useRouter();
  const { users, count } = Route.useLoaderData();

  return (
    <div>
      <h1 className="text-2xl bg-blue-600 text-gray-200 italic p-2">
        TanStack Start + tailwindcss + @koei/ui
      </h1>

      <div className="p-4 gap-5 flex flex-col">
        <div className="flex gap-5 items-center">
          <Button
            onClick={() => {
              updateCount({ data: 2 }).then(() => {
                router.invalidate();
              });
            }}
          >
            @koei/ui TW Button
          </Button>
          <button
            type="button"
            className="border-2 p-2 rounded"
            onClick={() => {
              updateCount({ data: 1 }).then(() => {
                router.invalidate();
              });
            }}
          >
            @koei/app TW html button
          </button>
          <div>count: {count}</div>
        </div>
        <div>
          <h1 className="p-2 text-2xl">Users from @koei/core drizzle pg</h1>
          <table>
            <thead>
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Age</th>
                <th className="p-2 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.age}</td>
                  <td className="p-2">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

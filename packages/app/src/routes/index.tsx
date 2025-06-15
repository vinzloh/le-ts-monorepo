import * as fs from 'node:fs';
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

const updateCount = createServerFn({ method: 'POST' })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount();
    await fs.promises.writeFile(filePath, `${count + data}`);
  });

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <div>
      <h1 className="text-2xl bg-amber-600 italic mb-4">
        TanStack Start + tailwindcss minus @koei/ui
      </h1>
      <Button
        onClick={() => {
          updateCount({ data: 2 }).then(() => {
            router.invalidate();
          });
        }}
      >
        @koei/ui Tailwind Button
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
        Add 1 to {state}?
      </button>
    </div>
  );
}

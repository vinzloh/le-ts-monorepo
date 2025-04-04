import { Await, createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
  loaderDeps: ({ search: { page } }) => ({ page }),
  loader: async ({ abortController, deps: { page } }) => {
    console.log(`abortController.signal:`, abortController.signal);
    // abortController.abort();
    const slow = new Promise<{ status: boolean }>((resolve, reject) => {
      const timeout = setTimeout(() => {
        // console.log(
        //   `abortController.signal:`,
        //   abortController.signal
        // );
        console.log(`resolve`);
        resolve({ status: true });
      }, 2000);

      if (abortController.signal.aborted) {
        clearTimeout(timeout);
        // reject('aborted');
      } else {
        // console.log(`resolve`);
      }
    });

    // slow.
    console.log(`page:`, page);
    return { slow };
  },
  pendingComponent: () => <>Loading...</>,
});

function RouteComponent() {
  const { slow } = Route.useLoaderData();
  return (
    <div>
      <h1 className="text-xl">Posts</h1>
      <div className="flex gap-2">
        <Link
          to="."
          search={(prev) => ({ ...prev, page: (prev.page ?? 10) - 1 })}
        >
          Back Page
        </Link>
        <Link
          to="."
          search={(prev) => ({ ...prev, page: (prev.page ?? 10) + 1 })}
        >
          Next Page
        </Link>
        <Link
          to="/posts/$postId"
          params={{ postId: '1' }}
          search={{
            page: 10,
            filter: 'name',
          }}
          activeProps={{
            style: { fontWeight: 600, textDecoration: 'underline' },
          }}
        >
          Post 1
        </Link>
        <Link
          to="/posts/$postId"
          params={{ postId: '2' }}
          activeProps={{
            style: { fontWeight: 600, textDecoration: 'underline' },
          }}
        >
          Post 2
        </Link>
      </div>
      <Await promise={slow} fallback={<>Fallback...</>}>
        {(data) => {
          return <>This la: {'data'}</>;
        }}
      </Await>
      <Outlet />
    </div>
  );
}

import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  retainSearchParams,
  stripSearchParams,
} from '@tanstack/react-router';
import { z } from 'zod';

const searchSchema = z.object({
  filter: z.enum(['name', 'age']).optional(),
  page: z.number().default(10).optional(), //.optional(), //.catch(1),
});

export const Route = createFileRoute('/posts')({
  // beforeLoad: (ctx) => {
  //   console.log(`AUTHED LEH`);
  //   throw redirect({ to: "/login" });
  // },
  validateSearch: searchSchema,
  component: RouteComponent,
  search: {
    middlewares: [
      //
      retainSearchParams(['page']),
      stripSearchParams({ page: 10 }),
    ],
  },
});

function RouteComponent() {
  return (
    <div>
      ROUTE YOLO
      {/* <h1>Posts!</h1> */}
      <Outlet />
    </div>
  );
}

import { createFileRoute, getRouteApi, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();
  // const search = Route.useSearch();
  const search = getRouteApi('/posts/$postId').useSearch();
  console.log(`search:`, search);
  return (
    <div>
      <div className="flex gap-2">
        <Link to="/posts/$postId/edit" params={params}>
          Edit
        </Link>
      </div>
      <h1>Post {params.postId}</h1>
      <div>Page: {search.page}</div>
    </div>
  );
}

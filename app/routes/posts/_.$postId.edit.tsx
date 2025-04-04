import { createFileRoute, Link, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/_/$postId/edit')({
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();
  return (
    <div>
      <Link to="/posts/$postId" params={params}>
        Back
      </Link>
      <h1>Edit Post {params.postId}</h1>
    </div>
  );
}

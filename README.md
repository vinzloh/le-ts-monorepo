# TypeScript Monorepo (WIP 🛠)

With live types and IDE import hints.

- Tailwind 4.0 with monorepo HMR

## Setup considerations

### Real-world repos

- https://github.com/mui/base-ui
- https://github.com/colinhacks/zod

### Project references over path aliases

> Historically, Nx, and many other monorepo tools, have relied on TypeScript's path aliases to connect your many packages to one another. While this approach can work, it does come with some overhead. Apart from runtimes and bundlers requiring special handling, the main limitation is in large monorepos. We've seen larger organizations struggle with slowness, memory issues and editors not being able to properly resolve symbols.
>
> https://nx.dev/blog/new-nx-experience-for-typescript-monorepos

### ✅ tsconfig paths - Why yes

> They’re still easier to use than any of the alternatives imo. Won’t go anywhere unless that changes
>
> Jarred Sumner, Bun
> https://x.com/jarredsumner/status/1770479407184113972

- https://github.com/vitejs/vite-ts-monorepo-rfc#approach-1-monorepo-setup-using-tsconfig-paths
- https://github.com/aleclarson/vite-tsconfig-paths instead of resolve.alias

### ❌ export conditions - Why no

> The problem arises when the user has a codebase with mixed .ts and .tsx files, and want to use extension-less imports for both.
>
> https://github.com/vitejs/vite-ts-monorepo-rfc#cons-1

## References

- https://colinhacks.com/essays/live-types-typescript-monorepo

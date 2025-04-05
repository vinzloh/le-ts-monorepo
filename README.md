# TypeScript Monorepo (WIP 🛠)

With live types and IDE import hints.

## Setup considerations

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

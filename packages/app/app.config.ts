import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: { preset: 'netlify' },
  tsr: { appDirectory: 'src' },
  vite: {
    build: {
      rollupOptions: {
        // https://github.com/brianc/node-postgres/issues/2987
        external: ['cloudflare:sockets'],
      },
    },
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tailwindcss(),
    ],
  },
});

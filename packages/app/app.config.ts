import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';

// TODO: tailwind, react?
// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: { preset: 'netlify' },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      // TODO:  tailwindcss()
    ],
  },
});

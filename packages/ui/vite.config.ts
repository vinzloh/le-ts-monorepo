import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'lib',
      formats: ['es'],
    },
  },
  plugins: [tsconfigPaths(), react(), tailwindcss()],
});

import { defineConfig } from 'vite';

export default defineConfig({
  base: '/buildhybridai-label-lens/',
  build: {
    target: 'es2022',
    sourcemap: true,
  },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});

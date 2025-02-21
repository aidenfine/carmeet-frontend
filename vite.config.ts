// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src')  // This sets up 'src' as the root directory
    }
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Use the repository name as base path when building in GitHub Actions
  base: process.env.GITHUB_ACTIONS ? '/Sure-savings/' : '/',
  plugins: [react()],
  server: {
    host: true,
    // Allow access via any public hostname (e.g., Cloudflare tunnels)
    allowedHosts: true,
  },
  preview: {
    host: true,
    // Allow access via any public hostname (e.g., Cloudflare tunnels)
    allowedHosts: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

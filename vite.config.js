import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    
    // --- Add these lines for ngrok / external access ---

    // 1. Listen on all network interfaces
    // This allows external connections (like ngrok) to reach your dev server.
    // '0.0.0.0' or true works. '0.0.0.0' is explicit.
    host: '0.0.0.0', 

    // 2. (Optional but recommended for security) Explicitly allow ngrok hostnames
    // When ngrok starts, it gives you a public URL like `https://xxxxxx.ngrok-free.app`.
    // You should add that dynamic hostname here.
    // You might need to run ngrok once to get the exact hostname,
    // or if you have a static ngrok domain, use that.
    // Replace 'your-ngrok-subdomain.ngrok-free.app' with your actual ngrok URL's domain.
    allowedHosts: [
      '.ngrok-free.app', // Allows any free ngrok subdomain
      // Or if you have a custom domain: 'my-custom-domain.ngrok.app',
    ],

    // 3. Configure HMR (Hot Module Replacement) for external access
    // This is crucial for HMR to work correctly over ngrok, especially with HTTPS.
    hmr: {
      clientPort: 443, // ngrok uses port 443 for HTTPS tunnels
      // host: 'your-ngrok-subdomain.ngrok-free.app', // You might sometimes need this too
                                                   // but clientPort 443 is often sufficient
    },

    // --- End of ngrok specific configurations ---
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
// });

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';

// https://vitejs.dev/config
export default defineConfig({
    server: {
        host: true,
        strictPort: true,
        port: 3000,
        watch: {
            usePolling: true,
        }
    },
    plugins: [reactRefresh()],
});

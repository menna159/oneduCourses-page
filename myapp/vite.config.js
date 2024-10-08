import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'myLib',
            fileName: 'myLib',
        },
        rollupOptions: {
            external: [/^node:\w+/], // <-- ignores all 'node:*'
        },
    },
});
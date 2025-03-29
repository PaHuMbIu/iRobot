import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    base: "/iRobot/",
    plugins: [
        viteStaticCopy({
            targets: [
                { src: './assets/slider-robots/*', dest: 'assets/slider-robots' },
                { src: './assets/slider-shopping/*', dest: 'assets/slider-shopping' },
                { src: './assets/slider-marketing/*', dest: 'assets/slider-marketing' }
            ],
        }),
    ],
});
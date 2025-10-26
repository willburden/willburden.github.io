// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    image: {
        responsiveStyles: true,
        layout: 'constrained',
        objectFit: 'scale-down',
        objectPosition: 'center',
        breakpoints: [400, 640, 750, 828, 1080, 1280, 1668, 2048, 2560],
    },
});

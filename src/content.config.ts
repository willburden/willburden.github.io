import { defineCollection, z } from "astro:content";

import { glob } from 'astro/loaders';

const posts = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
    schema: ({ image }) => z.strictObject({
        title: z.string(),
        subtitle: z.string().optional(),
        pubDate: z.coerce.date(),
        hero: z.strictObject({
            image: image(),
            alt: z.string().optional(),
        }).optional(),
        bandcamp: z.strictObject({
            album: z.number(),
            tracks: z.number().optional(),
        }).optional(),
        tags: z.array(
            z.string(),
        ).default([]),
    }),
});

export const collections = { posts };

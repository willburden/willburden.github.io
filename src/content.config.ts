import { defineCollection, z } from "astro:content";

import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
    schema: ({ image }) => z.strictObject({
        title: z.string(),
        subtitle: z.string().optional(),
        pubDate: z.coerce.date(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        tags: z.array(
            z.string(),
        ).default([]),
    }),
});

export const collections = { blog };

import { defineCollection, z, type SchemaContext } from "astro:content";

import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
    schema: ({ image }) => z.strictObject({
        title: z.string(),
        pubDate: z.coerce.date(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
    }),
});

export const collections = { blog };

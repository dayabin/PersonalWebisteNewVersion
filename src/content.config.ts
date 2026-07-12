import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/publications' }),
});

export const collections = { publications };

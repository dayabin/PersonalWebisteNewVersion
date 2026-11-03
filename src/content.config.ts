import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publications = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string().min(1),
    authors: z.array(z.string()).default([]),
    date: z.coerce.date(),
    publication_types: z.enum(['article-journal', 'manuscript']),
    publication: z.string().default(''),
    abstract: z.string().default(''),
    doi: z.string().trim().transform((value) =>
      value.startsWith('10.') ? `https://doi.org/${value}` : value
    ).pipe(z.url()).optional(),
    url_pdf: z.url().optional(),
  }),
});

export const collections = { publications };

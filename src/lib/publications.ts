import type { CollectionEntry } from 'astro:content';

export type PublicationEntry = CollectionEntry<'publications'>;

export function publicationSlug(entry: PublicationEntry) {
  return entry.id.replace(/\/index$/, '');
}

export function formatAuthors(authors: unknown) {
  if (!Array.isArray(authors)) return '';
  return authors
    .map((author) => (author === 'admin' ? 'Yabin Da' : String(author)))
    .join(', ');
}

export function publicationYear(date: unknown) {
  const parsed = new Date(String(date));
  return Number.isNaN(parsed.getTime()) ? '' : String(parsed.getFullYear());
}

export function sortPublications(entries: PublicationEntry[]) {
  return [...entries].sort((a, b) => {
    const aDate = new Date(String(a.data.date)).getTime() || 0;
    const bDate = new Date(String(b.data.date)).getTime() || 0;
    return bDate - aDate;
  });
}

export function isWorkingPaper(entry: PublicationEntry) {
  return entry.data.publication_types === 'manuscript';
}

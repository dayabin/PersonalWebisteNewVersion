import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';

export type LegacySection = 'teaching' | 'data' | 'notes_in_r' | 'regular_post';

export type LegacyPage = {
  section: LegacySection;
  title: string;
  slug: string;
  date: string;
  summary: string;
  body: string;
};

const contentRoot = join(cwd(), 'src', 'legacy-content');

function scalar(frontmatter: string, key: string) {
  const value = frontmatter.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'))?.[1]?.trim() ?? '';
  return value.replace(/^['"]|['"]$/g, '');
}

function textSummary(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 220);
}

function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getLegacyPages(section: LegacySection): LegacyPage[] {
  const directory = join(contentRoot, section);
  return readdirSync(directory)
    .filter((file) => file.endsWith('.html'))
    .map((file) => {
      const source = readFileSync(join(directory, file), 'utf8');
      const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
      const frontmatter = match?.[1] ?? '';
      const body = (match?.[2] ?? source).trim();
      const fallbackSlug = file.replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '').replace(/\.en\.html$|\.html$/g, '');
      const summary = scalar(frontmatter, 'summary') || textSummary(body);
      return {
        section,
        title: scalar(frontmatter, 'title') || fallbackSlug.replaceAll('-', ' '),
        slug: normalizeSlug(scalar(frontmatter, 'slug') || fallbackSlug),
        date: scalar(frontmatter, 'date'),
        summary,
        body,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getLegacyPage(section: LegacySection, slug: string) {
  return getLegacyPages(section).find((page) => page.slug === slug);
}

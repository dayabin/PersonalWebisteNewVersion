import legacyIndex from '../data/legacy-index.json';

export type LegacyEntry = {
  title: string;
  summary: string;
  relpermalink: string;
  section: string;
  publishdate: string;
};

const entries = legacyIndex as LegacyEntry[];

export function legacyBySection(section: string) {
  return entries
    .filter((entry) => entry.section === section && entry.title && entry.relpermalink)
    .filter((entry, index, all) => all.findIndex((item) => item.relpermalink === entry.relpermalink) === index)
    .sort((a, b) => String(b.publishdate).localeCompare(String(a.publishdate)));
}

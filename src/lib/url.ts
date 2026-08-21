const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Build an internal href that survives the GitHub-Pages subpath deploy. */
export function href(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}` || '/';
}

export const SITE = {
  name: '使うAI',
  tagline: '実際に触ってから書く、AIツールの手引き',
  description:
    '海外発のAIツールを実際に動かして、日本語で使い方・料金・向き不向きをまとめています。触っていないものは「触っていない」と書きます。',
  locale: 'ja_JP',
} as const;

export function formatDate(d: Date): string {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Tokyo',
  }).format(d);
}

export const CATEGORY_LABEL: Record<string, string> = {
  review: 'レビュー',
  guide: '使い方',
  compare: '比較',
  news: '新着',
  roundup: 'まとめ',
};

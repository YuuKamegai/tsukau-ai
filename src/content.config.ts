import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Content types from ROADMAP.md: capture (guide/news) vs convert (review/compare/roundup). */
export const CATEGORIES = ['review', 'guide', 'compare', 'news', 'roundup'] as const;

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(CATEGORIES),
    /** Tool slugs this post covers — drives related-post and comparison links. */
    tools: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    /** True when the post carries an affiliate link, so the PR banner renders. */
    pr: z.boolean().default(false),
    /** Recorded hands-on evidence path under the ops repo, when the tool was run. */
    testedOn: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };

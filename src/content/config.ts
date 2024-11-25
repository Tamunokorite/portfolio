import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const project = defineCollection({
	type: 'content',

	schema: z.object({
		title: z.string(),
		summary: z.string(),
		heroImage: z.string().optional(),
		thumbnail: z.string(),
		orderIdx: z.number(),
		url: z.string().optional(),
		isExternal: z.boolean().optional(),
		hasContent: z.boolean().optional()
	})
})

const experience = defineCollection({
	type: 'content',

	schema: z.object({
		title: z.string(),
		startDate: z.string(),
		endDate: z.string().optional(),
		logo: z.string(),
		summary: z.string(),
		orderIdx: z.number(),
	})
})

export const collections = { blog, project, experience };

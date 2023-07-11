import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		tags: z. 
			array(z.string())
			.optional(),
		thumbnail: z.string().url().optional(),
	}),
});

const projects = defineCollection({
	schema: z.object({
		name: z.string(),
		description: z.string(),
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		thumbnail: z.string().url().optional(),
	}),
});

export const collections = { blog, projects };

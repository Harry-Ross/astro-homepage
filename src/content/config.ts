import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		draft: z.boolean().optional(),
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
		thumbnail: z.string().optional(),
	}),
});

const projects = defineCollection({
	schema: ({ image }) => z.object({
		name: z.string(),
		subtitle: z.string().optional(),
		description: z.string(),
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		thumbnail: image().optional(),
		thumbnailVideo: z.string().optional(),
	}),
});

export const collections = { blog, projects };

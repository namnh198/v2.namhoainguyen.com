import {defineCollection, reference, z} from "astro:content";

const post = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    image: image().optional(),
    video: z.string().optional(),
    categories: z.array(reference('category')).optional(),
    tags: z.array(z.string()).optional(),
    series: z.string().optional(),
    part: z.number().optional(),
    draft: z.boolean().optional(),
    private: z.boolean().optional(),
    publishedAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
});

const category = defineCollection({
  type: 'data',
  schema: ({image}) => z.object({
    title: z.string(),
    color: z.string(),
    image: image().optional(),
    excerpt: z.string().optional()
  })
})

export const collections = {
  post,
  category
};

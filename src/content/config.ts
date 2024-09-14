// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
        pageEmoji: z.string().optional(),
    }),
    // If you want to make any of the properties optional in markdown just
    // append the `z.string()` with `optional()` method
});
// Export a single `collections` object to register your collection(s)
export const collections = {
    posts: postsCollection,
};

import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "tags must be unique",
    })
    .optional(),
});

const projectsSchema = z.object({
  cvBullets: z.array(z.string()).optional(),
  category: z.enum(["Machine learning", "Security & applications", "Embedded systems & hardware"]),
  period: z.string().optional(),
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  github: z.string().optional(),
  liveUrl: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "tags must be unique",
    })
    .optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectsSchema = z.infer<typeof projectsSchema>;
// export type StoreSchema = z.infer<typeof storeSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectsCollection = defineCollection({ schema: projectsSchema });

export const collections = {
  blog: blogCollection,
  personal: defineCollection({ schema: blogSchema }),
  projects: projectsCollection,
};

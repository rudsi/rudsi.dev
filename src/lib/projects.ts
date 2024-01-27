import { z, defineCollection } from "astro:content";

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;


export async function getProjects(): Promise<Project[]> {
  return [
    {
      repo: "rudsi.dev",
      link: "https://github.com/rudsi/rudsi.dev",
      description: "personal site built with Astro",
    },
  ];
}
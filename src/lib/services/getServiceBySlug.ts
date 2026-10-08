import { getServiceBySlug as getServiceBySlugFromCms } from "@/lib/cms";
export async function getServiceBySlug(slug: string) { return getServiceBySlugFromCms(slug); }

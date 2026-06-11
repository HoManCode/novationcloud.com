import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const baseUrl = "https://novationcloud.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "/",
    "/services",
    ...services.map((service) => `/blog/${service.slug}`),
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}

import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  sitemap: true,
  site: "https://www.interagil.com/",
  base: "/",
  outDir: "build",
  output: "static",
  integrations: [mdx(), tailwind()],
  server: {
    port: 3000
  }
});

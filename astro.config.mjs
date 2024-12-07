import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://harry.is-a.dev",
  prefetch: true,
  integrations: [
    mdx(),
    sitemap(),
    // partytown({
    //   config: {
    //     forward: ["dataLayer.push"]
    //   }
    // }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

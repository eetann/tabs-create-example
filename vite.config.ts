import manifest from "./src/manifest";
import { crx } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [crx({ manifest })],
});

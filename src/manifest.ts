import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  name: "tabs example",
  description: "chrome.tabs example",
  version: "1.0.0",
  permissions: [],
  action: { "default_popup": "index.html" }
});

// GitHub Pages serves static files only, so a direct visit or refresh on a
// client-side route (e.g. /power-platform) would 404. Copying the built
// index.html to 404.html makes GitHub Pages fall back to the SPA for any
// unknown path, and react-router then renders the right page client-side.
import { copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

copyFileSync(join(distDir, "index.html"), join(distDir, "404.html"));
console.log("Copied dist/index.html -> dist/404.html for GitHub Pages SPA fallback");

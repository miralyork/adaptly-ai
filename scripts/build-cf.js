import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const client = path.join(dist, "client");
const server = path.join(dist, "server");

async function main() {
  console.log("Reorganizing build output for Cloudflare Pages...");
  
  // Clean up any old output from previous builds in dist/ root
  await fs.rm(path.join(dist, "assets"), { recursive: true, force: true });
  await fs.rm(path.join(dist, "_worker.js"), { recursive: true, force: true });
  
  // Move all files from dist/client to dist/
  const clientFiles = await fs.readdir(client);
  for (const file of clientFiles) {
    await fs.cp(path.join(client, file), path.join(dist, file), { recursive: true });
  }
  
  // Rename dist/server to dist/_worker.js
  await fs.rename(server, path.join(dist, "_worker.js"));
  
  // Rename dist/_worker.js/server.js to dist/_worker.js/index.js
  await fs.rename(
    path.join(dist, "_worker.js", "server.js"),
    path.join(dist, "_worker.js", "index.js")
  );

  // Generate _routes.json
  const routes = {
    version: 1,
    include: ["/*"],
    exclude: ["/favicon.png", "/robots.txt", "/assets/*"]
  };
  await fs.writeFile(
    path.join(dist, "_routes.json"),
    JSON.stringify(routes, null, 2)
  );

  // Clean up empty client dir
  await fs.rm(client, { recursive: true, force: true });
  console.log("Successfully reorganized build output!");
}

main().catch(console.error);

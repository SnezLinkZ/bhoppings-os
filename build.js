// build.js
const { build } = require("esbuild");
const { readdirSync, statSync } = require("fs");
const { join } = require("path");

const SRC = "src";
const OUT = "public/dist";

function findFiles(dir, files = []) {
  for (const file of readdirSync(dir)) {
    const full = join(dir, file);

    if (statSync(full).isDirectory()) findFiles(full, files);
    else if (full.endsWith(".jsx") || full.endsWith(".js") || full.endsWith(".scss"))
      files.push(full);
  }
  return files;
}

const entries = findFiles(SRC);

build({
  entryPoints: entries,
  outbase: SRC,
  outdir: OUT,
  bundle: true,           // ← bundle everything including React
  format: "esm",
  sourcemap: true,
  target: "es2020",
  jsx: "automatic",
  loader: {
    ".js": "js",
    ".jsx": "jsx",
    ".scss": "css",       // ← compile SCSS to CSS
  },
}).then(() => console.log("✅ Build complete"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

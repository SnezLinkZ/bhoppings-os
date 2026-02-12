// build.js
const { build } = require("esbuild");
const { readdirSync, statSync } = require("fs");
const { join } = require("path");

const SRC = "src";
const OUT = "public/dist";

function findJSX(dir, files = []) {
  for (const file of readdirSync(dir)) {
    const full = join(dir, file);
    if (statSync(full).isDirectory()) findJSX(full, files);
    else if (full.endsWith(".jsx")) files.push(full);
  }
  return files;
}

const entries = findJSX(SRC);

build({
  entryPoints: entries,
  outbase: SRC,
  outdir: OUT,
  format: "esm",
  bundle: false,
  sourcemap: true,
  jsx: "automatic",
  loader: { ".jsx": "jsx" },
  target: "es2020"
}).then(() => console.log("✅ Build complete!"))
  .catch((err) => { console.error(err); process.exit(1); });

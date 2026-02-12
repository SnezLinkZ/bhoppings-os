const { build } = require("esbuild");

build({
  entryPoints: ["src/main.jsx"],
  bundle: true,
  outdir: "public/dist",
  platform: "browser",
  format: "iife",
  sourcemap: true,
  minify: true,
  target: ["es2020"],
  jsx: "automatic",
  define: {
    "process.env.NODE_ENV": '"production"'
  },
  loader: {
    ".js": "js",
    ".jsx": "jsx",
    ".scss": "css"
  }
})
  .then(() => console.log("Build complete"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

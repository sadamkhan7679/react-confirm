import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    ".": "src/test.ts",
  },
  banner: {
    js: "'use client'",
  },
  format: ["cjs", "esm"],
  external: ["react"],
  dts: true,
  clean: true,
  // minify: true,
  // sourcemap: true,
  // treeshake: true,
});

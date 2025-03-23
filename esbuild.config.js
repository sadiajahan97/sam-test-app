import { build } from "esbuild";

build({
  bundle: true,
  entryPoints: ["./request-email-otp/index"],
  keepNames: false,
  minify: true,
  outdir: "./lib",
  platform: "node",
  sourcemap: false,
  target: "node18",
  treeShaking: true,
});

import { nodeResolve } from '@rollup/plugin-node-resolve';
import federation from "@originjs/vite-plugin-federation";

import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.js",
  preserveEntrySignatures: false,
  plugins: [
    federation({
      remotes: {
        remote_app: "http://localhost:5001/remoteEntry.js",
      },
      shared: ["@vaadin/button"]
    }),
    nodeResolve()
  ],
  output: [{ format: "esm", dir: pkg.main }],
};

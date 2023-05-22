import { nodeResolve } from '@rollup/plugin-node-resolve';
import federation from '@originjs/vite-plugin-federation';

export default {
  input: "src/index.js",
  plugins: [
    federation({
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/button"
      }
    }),
    nodeResolve()
  ],
  output: {
    format: "esm",
    dir: "dist"
  },
};

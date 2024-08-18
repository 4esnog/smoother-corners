import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: [
        "src/smoother-corners-worklet.ts",
        "src/smoother-border-worklet.ts",
      ],
    },
  },
});

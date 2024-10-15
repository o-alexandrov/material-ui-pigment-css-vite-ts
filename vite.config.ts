import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pigment } from "@pigment-css/vite-plugin";
import { createTheme } from "@mui/material/styles";
import { visualizer } from "rollup-plugin-visualizer";

const pigmentConfig = {
  theme: createTheme({
    cssVariables: true,
    colorSchemes: { light: true, dark: true },
  }),
  transformLibraries: ["@mui/material"],
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pigment(pigmentConfig)],
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: true,
          template: `treemap`, // values other than "treemap" are not useful, so far tried: "sunburst" | "treemap" | "network" | "raw-data" | "list"
          // template: "nektwork", // values other than "treemap" are not useful, so far tried: "sunburst" | "treemap" | "network" | "raw-data" | "list"
          gzipSize: true,
          // exclude: [
          //   { file: `**/node_modules/@mui/**` },
          //   { file: `**/node_modules/react/**` },
          //   { file: `**/node_modules/react-dom/**` },
          //   { file: `**/node_modules/scheduler/**` }, // used by "react-dom"
          // ],
        }),
      ],
    },
  },
});

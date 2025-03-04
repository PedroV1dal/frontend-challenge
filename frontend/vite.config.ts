import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(() => {
  const env = loadEnv("", process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      "process.env": env,
    },
    build: {
      outDir: "build",
      target: "esnext",
    },
  };
});

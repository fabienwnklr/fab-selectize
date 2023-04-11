import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    console.log
    return {
        build: {
            minify: env.NODE_ENV === "production",
            target: "es2015",
            rollupOptions: {
                input: "./src/selectize.ts",
                output: [
                    {
                        format: "cjs",
                        entryFileNames: "[name].bundle.[format].js",
                        assetFileNames: "[name].[ext]",
                    },
                    {
                        format: "es",
                        entryFileNames: "[name].bundle.[format].js",
                        assetFileNames: "[name].[ext]",
                    },
                    {
                        format: "umd",
                        entryFileNames: "[name].bundle.[format].js",
                    },
                    {
                        format: "iife",
                        entryFileNames: "[name].bundle.[format].js",
                    },
                ],
            },
        },
    };
    // css: {
    //     preprocessorOptions: {
    //       scss: {
    //         additionalData: `
    //           @import './src/styles/selectize.default.scss';
    //         `
    //       }
    //     }
    //   }
});

import { defineConfig, loadEnv } from "vite";

import pkg from './package.json';

const banner = `/**
* Fab Selectize v${pkg.version}
* Licensed under the Apache License, Version 2.0 (the "License");
*/
`;

const footer = ''

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    console.log;
    return {
        build: {
            minify: false,
            target: "es2015",
            rollupOptions: {
                input: ["./src/fab-selectize.complete.ts"],
                inlineDynamicImports: false,
                output: [
                    {
                        format: "cjs",
                        entryFileNames: "[name].bundle.[format].js",
                        assetFileNames: "[name].[ext]",
                        exports: "auto",
                        sourcemap: true,
                        banner,
                    },
                    {
                        format: "esm",
                        entryFileNames: "[name].bundle.[format].js",
                        assetFileNames: "[name].[ext]",
                        preserveModules: false,
                        sourcemap: true,
                        banner,
                    },
                    {
                        format: "cjs",
                        assetFileNames: "[name].[ext]",
                        exports: "auto",
                        banner,
                            // format: "iife",
                        dir: "docs/static/js",
                        entryFileNames: "fab-selectize.js",
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
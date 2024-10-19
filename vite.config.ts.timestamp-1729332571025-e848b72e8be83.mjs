// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/xiaohu/desktop/pr/Little-white-Fox-toolbox/node_modules/.pnpm/vite@5.4.9_@types+node@20.16.12_sass@1.80.1_stylus@0.63.0_terser@5.36.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/xiaohu/desktop/pr/Little-white-Fox-toolbox/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.9_@types+node@20.16.12_sass@1.80.1_stylus@0.63.0_terser@5.3_omjycswpqjwyeml4jyseub5abi/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/xiaohu/desktop/pr/Little-white-Fox-toolbox/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.9_@types+node@20.16.12_sass@1.80.1_stylus@0.63.0_terser_6inh2hmlv3bt2m7valcinjwk2e/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueDevTools from "file:///D:/xiaohu/desktop/pr/Little-white-Fox-toolbox/node_modules/.pnpm/vite-plugin-vue-devtools@7.5.2_@nuxt+kit@3.13.2_rollup@2.79.2__rollup@2.79.2_vite@5.4.9_@type_36b3tipnee3665g7zccgni5cea/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import VueJsx from "file:///D:/xiaohu/desktop/pr/Little-white-Fox-toolbox/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.9_@types+node@20.16.12_sass@1.80.1_stylus@0.63.0_terser_6inh2hmlv3bt2m7valcinjwk2e/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Components from "file:///D:/xiaohu/desktop/pr/Little-white-Fox-toolbox/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.8_@nuxt+kit@3.13.2_rollup@2.79.2__rollup@2._jddklkpwhvuwwi7zhmtfyecvla/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///D:/xiaohu/desktop/pr/Little-white-Fox-toolbox/node_modules/.pnpm/unplugin-auto-import@0.18.3_@nuxt+kit@3.13.2_rollup@2.79.2__@vueuse+core@11.1.0_vue@3.5.12_ty_7252djoensktvtbcreogiulh4m/node_modules/unplugin-auto-import/dist/vite.js";
import Icons from "file:///D:/xiaohu/desktop/pr/Little-white-Fox-toolbox/node_modules/.pnpm/unplugin-icons@0.19.3_@vue+compiler-sfc@3.5.12/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///D:/xiaohu/Desktop/pr/Little-white-Fox-toolbox/node_modules/.pnpm/unplugin-icons@0.19.3_@vue+compiler-sfc@3.5.12/node_modules/unplugin-icons/dist/resolver.js";
import { VitePWA } from "file:///D:/xiaohu/Desktop/pr/Little-white-Fox-toolbox/node_modules/.pnpm/vite-plugin-pwa@0.20.5_vite@5.4.9_@types+node@20.16.12_sass@1.80.1_stylus@0.63.0_terser@5.36._ipdbreatiztunayzr4hwmk3qlm/node_modules/vite-plugin-pwa/dist/index.js";
import Inspect from "file:///D:/xiaohu/Desktop/pr/Little-white-Fox-toolbox/node_modules/.pnpm/vite-plugin-inspect@0.8.7_@nuxt+kit@3.13.2_rollup@2.79.2__rollup@2.79.2_vite@5.4.9_@types+nod_yfmjipnuquro6hi46i4odhmxkm/node_modules/vite-plugin-inspect/dist/index.mjs";
import { ElementPlusResolver, NaiveUiResolver } from "file:///D:/xiaohu/Desktop/pr/Little-white-Fox-toolbox/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.8_@nuxt+kit@3.13.2_rollup@2.79.2__rollup@2._jddklkpwhvuwwi7zhmtfyecvla/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///D:/xiaohu/desktop/pr/Little-white-Fox-toolbox/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "ViteTemplate",
        short_name: "ViteTemplate",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        navigateFallback: "/",
        cleanupOutdatedCaches: false
      },
      // client: {
      //   installPrompt: true,
      //   periodicSyncForUpdates: 20
      // },
      devOptions: {
        enabled: true,
        type: "module"
      }
    }),
    VueJsx(),
    Inspect(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ["src/components/", "src/layout/", "src/views", "src/assets"],
      resolvers: [
        NaiveUiResolver(),
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon"
        })
      ],
      dts: "src/types/components.d.ts"
    }),
    AutoImport({
      // dts: path.resolve(pathSrc, 'typings', 'auto-imports.d.ts'),
      dts: "src/types/auto-imports.d.ts",
      // imports: ['vue', '@vueuse/core'],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      imports: ["vue", "vue/macros", "vue-router", "pinia", "@vueuse/core", { "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"] }],
      dirs: ["src/composables", "src/utils"],
      // Auto import for all module exports under directories
      // dirs: [
      //   // './hooks',
      //   // './composables'
      //   // ...
      // ],
      eslintrc: {
        // enabled: true, // Default `false`
        enabled: false,
        // Default `false`
        filepath: "./.eslintrc-auto-import.json",
        // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true
        // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      // Auto import functions from UILibrary, e.g. Message, Spin, Loading, MessageBox... (with style)
      resolvers: [
        ElementPlusResolver()
        // Auto import icon components
      ]
    }),
    Icons({
      compiler: "vue3",
      customCollections: {
        // custom: FileSystemIconLoader(`${vitePath.src}/assets/svg`)
      },
      scale: 1,
      defaultClass: "inline-block",
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "//#//": fileURLToPath(new URL("./types", __vite_injected_original_import_meta_url))
    }
  },
  // prevent vite from obscuring rust errors
  clearScreen: false,
  server: {
    // Tauri expects a fixed port, fail if that port is not available
    strictPort: true,
    // if the host Tauri is expecting is set, use it
    host: "0.0.0.0",
    port: 4096
  },
  // to access the Tauri environment variables set by the CLI with information about the current target
  envPrefix: ["VITE_", "TAURI_ENV_*"],
  build: {
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target: process.env.TAURI_ENV_PLATFORM == "windows" ? "chrome105" : "safari13",
    // don't minify for debug builds
    minify: !process.env.TAURI_ENV_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_ENV_DEBUG
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx4aWFvaHVcXFxcZGVza3RvcFxcXFxwclxcXFxMaXR0bGUtd2hpdGUtRm94LXRvb2xib3hcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHhpYW9odVxcXFxkZXNrdG9wXFxcXHByXFxcXExpdHRsZS13aGl0ZS1Gb3gtdG9vbGJveFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDoveGlhb2h1L2Rlc2t0b3AvcHIvTGl0dGxlLXdoaXRlLUZveC10b29sYm94L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5pbXBvcnQgVnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgaHRtbCBmcm9tICd2aXRlLXBsdWdpbi1odG1sJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSdcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJ1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcbmltcG9ydCBJbnNwZWN0IGZyb20gJ3ZpdGUtcGx1Z2luLWluc3BlY3QnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyLCBOYWl2ZVVpUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLFxuICAgIHZ1ZURldlRvb2xzKCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnLCAnc2FmYXJpLXBpbm5lZC10YWIuc3ZnJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnVml0ZVRlbXBsYXRlJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1ZpdGVUZW1wbGF0ZScsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgd29ya2JveDoge1xuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiAnLycsXG4gICAgICAgIGNsZWFudXBPdXRkYXRlZENhY2hlczogZmFsc2VcbiAgICAgIH0sXG4gICAgICAvLyBjbGllbnQ6IHtcbiAgICAgIC8vICAgaW5zdGFsbFByb21wdDogdHJ1ZSxcbiAgICAgIC8vICAgcGVyaW9kaWNTeW5jRm9yVXBkYXRlczogMjBcbiAgICAgIC8vIH0sXG4gICAgICBkZXZPcHRpb25zOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIHR5cGU6ICdtb2R1bGUnXG4gICAgICB9XG4gICAgfSksXG4gICAgVnVlSnN4KCksXG4gICAgSW5zcGVjdCgpLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgLy8gYWxsb3cgYXV0byBsb2FkIG1hcmtkb3duIGNvbXBvbmVudHMgdW5kZXIgYC4vc3JjL2NvbXBvbmVudHMvYFxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICAgIC8vIGFsbG93IGF1dG8gaW1wb3J0IGFuZCByZWdpc3RlciBjb21wb25lbnRzIHVzZWQgaW4gbWFya2Rvd25cbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb25lbnRzLycsICdzcmMvbGF5b3V0LycsICdzcmMvdmlld3MnLCAnc3JjL2Fzc2V0cyddLFxuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIE5haXZlVWlSZXNvbHZlcigpLFxuICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKCksXG4gICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NTZGRVx1NjgwN1x1N0VDNFx1NEVGNlxuICAgICAgICBJY29uc1Jlc29sdmVyKHtcbiAgICAgICAgICBwcmVmaXg6ICdJY29uJ1xuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIGR0czogJ3NyYy90eXBlcy9jb21wb25lbnRzLmQudHMnXG4gICAgfSksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICAvLyBkdHM6IHBhdGgucmVzb2x2ZShwYXRoU3JjLCAndHlwaW5ncycsICdhdXRvLWltcG9ydHMuZC50cycpLFxuICAgICAgZHRzOiAnc3JjL3R5cGVzL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAgIC8vIGltcG9ydHM6IFsndnVlJywgJ0B2dWV1c2UvY29yZSddLFxuICAgICAgLy8gR2VuZXJhdGUgY29ycmVzcG9uZGluZyAuZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbiBmaWxlLlxuICAgICAgLy8gZXNsaW50IGdsb2JhbHMgRG9jcyAtIGh0dHBzOi8vZXNsaW50Lm9yZy9kb2NzL3VzZXItZ3VpZGUvY29uZmlndXJpbmcvbGFuZ3VhZ2Utb3B0aW9ucyNzcGVjaWZ5aW5nLWdsb2JhbHNcbiAgICAgIGltcG9ydHM6IFsndnVlJywgJ3Z1ZS9tYWNyb3MnLCAndnVlLXJvdXRlcicsICdwaW5pYScsICdAdnVldXNlL2NvcmUnLCB7J25haXZlLXVpJzogWyd1c2VEaWFsb2cnLCAndXNlTWVzc2FnZScsICd1c2VOb3RpZmljYXRpb24nLCAndXNlTG9hZGluZ0JhciddfV0sXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb3NhYmxlcycsICdzcmMvdXRpbHMnXSxcbiAgICAgIC8vIEF1dG8gaW1wb3J0IGZvciBhbGwgbW9kdWxlIGV4cG9ydHMgdW5kZXIgZGlyZWN0b3JpZXNcbiAgICAgIC8vIGRpcnM6IFtcbiAgICAgIC8vICAgLy8gJy4vaG9va3MnLFxuICAgICAgLy8gICAvLyAnLi9jb21wb3NhYmxlcydcbiAgICAgIC8vICAgLy8gLi4uXG4gICAgICAvLyBdLFxuICAgICAgZXNsaW50cmM6IHtcbiAgICAgICAgLy8gZW5hYmxlZDogdHJ1ZSwgLy8gRGVmYXVsdCBgZmFsc2VgXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLCAvLyBEZWZhdWx0IGBmYWxzZWBcbiAgICAgICAgZmlsZXBhdGg6ICcuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uJywgLy8gRGVmYXVsdCBgLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbmBcbiAgICAgICAgZ2xvYmFsc1Byb3BWYWx1ZTogdHJ1ZSAvLyBEZWZhdWx0IGB0cnVlYCwgKHRydWUgfCBmYWxzZSB8ICdyZWFkb25seScgfCAncmVhZGFibGUnIHwgJ3dyaXRhYmxlJyB8ICd3cml0ZWFibGUnKVxuICAgICAgfSxcbiAgICAgIC8vIEF1dG8gaW1wb3J0IGZ1bmN0aW9ucyBmcm9tIFVJTGlicmFyeSwgZS5nLiBNZXNzYWdlLCBTcGluLCBMb2FkaW5nLCBNZXNzYWdlQm94Li4uICh3aXRoIHN0eWxlKVxuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKVxuICAgICAgICAvLyBBdXRvIGltcG9ydCBpY29uIGNvbXBvbmVudHNcbiAgICAgIF1cbiAgICB9KSxcbiAgICBJY29ucyh7XG4gICAgICBjb21waWxlcjogJ3Z1ZTMnLFxuICAgICAgY3VzdG9tQ29sbGVjdGlvbnM6IHtcbiAgICAgICAgLy8gY3VzdG9tOiBGaWxlU3lzdGVtSWNvbkxvYWRlcihgJHt2aXRlUGF0aC5zcmN9L2Fzc2V0cy9zdmdgKVxuICAgICAgfSxcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgZGVmYXVsdENsYXNzOiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGF1dG9JbnN0YWxsOiB0cnVlXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgIFwiL1xcLyNcXC8vXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi90eXBlcycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxuICAvLyBwcmV2ZW50IHZpdGUgZnJvbSBvYnNjdXJpbmcgcnVzdCBlcnJvcnNcbiAgY2xlYXJTY3JlZW46IGZhbHNlLFxuICBzZXJ2ZXI6IHtcbiAgICAvLyBUYXVyaSBleHBlY3RzIGEgZml4ZWQgcG9ydCwgZmFpbCBpZiB0aGF0IHBvcnQgaXMgbm90IGF2YWlsYWJsZVxuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgLy8gaWYgdGhlIGhvc3QgVGF1cmkgaXMgZXhwZWN0aW5nIGlzIHNldCwgdXNlIGl0XG4gICAgaG9zdDogJzAuMC4wLjAnLFxuICAgIHBvcnQ6IDQwOTZcbiAgfSxcbiAgLy8gdG8gYWNjZXNzIHRoZSBUYXVyaSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2V0IGJ5IHRoZSBDTEkgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCB0YXJnZXRcbiAgZW52UHJlZml4OiBbJ1ZJVEVfJywgJ1RBVVJJX0VOVl8qJ10sXG4gIGJ1aWxkOiB7XG4gICAgLy8gVGF1cmkgdXNlcyBDaHJvbWl1bSBvbiBXaW5kb3dzIGFuZCBXZWJLaXQgb24gbWFjT1MgYW5kIExpbnV4XG4gICAgdGFyZ2V0OlxuICAgICAgcHJvY2Vzcy5lbnYuVEFVUklfRU5WX1BMQVRGT1JNID09ICd3aW5kb3dzJyA/ICdjaHJvbWUxMDUnIDogJ3NhZmFyaTEzJyxcbiAgICAvLyBkb24ndCBtaW5pZnkgZm9yIGRlYnVnIGJ1aWxkc1xuICAgIG1pbmlmeTogIXByb2Nlc3MuZW52LlRBVVJJX0VOVl9ERUJVRyA/ICdlc2J1aWxkJyA6IGZhbHNlLFxuICAgIC8vIHByb2R1Y2Ugc291cmNlbWFwcyBmb3IgZGVidWcgYnVpbGRzXG4gICAgc291cmNlbWFwOiAhIXByb2Nlc3MuZW52LlRBVVJJX0VOVl9ERUJVR1xuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVSxTQUFTLGVBQWUsV0FBVztBQUV0VyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sWUFBWTtBQUVuQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sYUFBYTtBQUNwQixTQUFTLHFCQUFxQix1QkFBdUI7QUFkc0osSUFBTSwyQ0FBMkM7QUFpQjVQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLGVBQWUsQ0FBQyxlQUFlLHVCQUF1QjtBQUFBLE1BQ3RELFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1Asa0JBQWtCO0FBQUEsUUFDbEIsdUJBQXVCO0FBQUEsTUFDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0EsWUFBWTtBQUFBLFFBQ1YsU0FBUztBQUFBLFFBQ1QsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQTtBQUFBLE1BRVQsWUFBWSxDQUFDLE9BQU8sSUFBSTtBQUFBO0FBQUEsTUFFeEIsU0FBUyxDQUFDLFVBQVUsY0FBYyxPQUFPO0FBQUEsTUFDekMsTUFBTSxDQUFDLG1CQUFtQixlQUFlLGFBQWEsWUFBWTtBQUFBLE1BQ2xFLFdBQVc7QUFBQSxRQUNULGdCQUFnQjtBQUFBLFFBQ2hCLG9CQUFvQjtBQUFBO0FBQUEsUUFFcEIsY0FBYztBQUFBLFVBQ1osUUFBUTtBQUFBLFFBQ1YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUNBLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQTtBQUFBLE1BRVQsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUwsU0FBUyxDQUFDLE9BQU8sY0FBYyxjQUFjLFNBQVMsZ0JBQWdCLEVBQUMsWUFBWSxDQUFDLGFBQWEsY0FBYyxtQkFBbUIsZUFBZSxFQUFDLENBQUM7QUFBQSxNQUNuSixNQUFNLENBQUMsbUJBQW1CLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9yQyxVQUFVO0FBQUE7QUFBQSxRQUVSLFNBQVM7QUFBQTtBQUFBLFFBQ1QsVUFBVTtBQUFBO0FBQUEsUUFDVixrQkFBa0I7QUFBQTtBQUFBLE1BQ3BCO0FBQUE7QUFBQSxNQUVBLFdBQVc7QUFBQSxRQUNULG9CQUFvQjtBQUFBO0FBQUEsTUFFdEI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxNQUNKLFVBQVU7QUFBQSxNQUNWLG1CQUFtQjtBQUFBO0FBQUEsTUFFbkI7QUFBQSxNQUNBLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3BELFNBQVcsY0FBYyxJQUFJLElBQUksV0FBVyx3Q0FBZSxDQUFDO0FBQUEsSUFDOUQ7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLGFBQWE7QUFBQSxFQUNiLFFBQVE7QUFBQTtBQUFBLElBRU4sWUFBWTtBQUFBO0FBQUEsSUFFWixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBO0FBQUEsRUFFQSxXQUFXLENBQUMsU0FBUyxhQUFhO0FBQUEsRUFDbEMsT0FBTztBQUFBO0FBQUEsSUFFTCxRQUNFLFFBQVEsSUFBSSxzQkFBc0IsWUFBWSxjQUFjO0FBQUE7QUFBQSxJQUU5RCxRQUFRLENBQUMsUUFBUSxJQUFJLGtCQUFrQixZQUFZO0FBQUE7QUFBQSxJQUVuRCxXQUFXLENBQUMsQ0FBQyxRQUFRLElBQUk7QUFBQSxFQUMzQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

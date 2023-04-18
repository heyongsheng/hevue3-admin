import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = loadEnv(mode, './')
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          }),
        ],
        imports: ['vue', 'vue-router'],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "./src/assets/style/main.scss" as globalScss;@use "./src/assets/style/element/index.scss" as *;
          `,
        },
      },
    },
    server: {
      proxy: {
        [config.VITE_APP_BASE_PREFIX]: {
          target: config.VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp(`^${config.VITE_APP_BASE_PREFIX}`), ''),
        },
      },
    },
  }
})

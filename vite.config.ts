import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';
import meta from './src/locales/meta.json';

// function handleBase(mode: string) {
//   if (mode === 'production') {
//     return '/newmedia/2025/landswindlers/';
//   } else if (mode === 'test') {
//     return '/test/landswindlers/';
//   } else {
//     return '/';
//   }
// }

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // loadEnv(mode, root, prefix)
  const env = loadEnv('', process.cwd());
  const { VITE_URL, VITE_MODE } = env;

  return {
    // base: handleBase(mode),
    base: VITE_URL,
    plugins: [
      vue(),
      viteCompression(), // 壓縮插件(.gz)
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: meta.metaTitle,
            description: meta.metaDesc,
            keywords: meta.metaKeywords,
            url: meta.metaURL,
            image: meta.metaImage,
            robot:
              VITE_MODE === 'production'
                ? 'index, follow'
                : 'noindex, nofollow',
          },
        },
      }), // 可注入html中ejs模板內填寫的變數
    ],
    optimizeDeps: {
      include: ['@udn-digital-center/common-components > vue-scrollto'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/styles/mixins.scss" as *;
          @use "@/assets/styles/colors.scss" as *;
          @use "@/assets/styles/variables.scss" as *;
          `,
        },
      },
    },
  };
});

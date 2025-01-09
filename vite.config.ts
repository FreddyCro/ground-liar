import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import { createHtmlPlugin } from "vite-plugin-html";

function handleBase(mode: string) {
  if (mode === "production") {
    return "/newmedia/2025/landswindlers/";
  } else if (mode === "test") {
    return "/test/landswindlers/";
  } else {
    return "/";
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: handleBase(mode),
    plugins: [
      vue(),
      viteCompression(), // 壓縮插件(.gz)
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: "自辦重劃發財夢：拆解一場圍繞土地的金錢遊戲 | 專題 | 聯合報",
            description:
              "即使內政部已修正辦法，自辦市地重劃仍亂象叢生，包括開發公司虛灌人頭地主及轉賣抵費地套利百億。聯合報盤點三個重劃區，拆解這場圍繞土地的金錢遊戲。",
            keywords:
              "自辦市地重劃、台中高鐵新市鎮、高雄湖底重劃區、台南安北重劃區、人頭地主、抵費地、聯合報、udn",
            url: "https://vip.udn.com/newmedia/2025/landswindlers/",
            image: "",
          },
        },
      }), // 可注入html中ejs模板內填寫的變數
    ],
    optimizeDeps: {
      include: ["@udn-digital-center/common-components > vue-scrollto"],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
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

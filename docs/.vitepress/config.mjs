import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import { getSidebar } from "./utils/getSidebar";

export default defineConfig({
  // 标签上显示的网站标题
  title: "zbwer's Blog",
  titleTemplate: "zbwer",
  // 在标签上显示所的 logo
  head: [["link", { rel: "icon", href: "/logo.svg" }]],

  // 网站描述，有利于被搜索引擎捕获
  description:
    "zbwer's tech blog: An undergraduate's journey through frontend development, sharing insights, tips, and experiences in web technologies.",
  // md 文件根目录
  srcDir: "./src",

  // 主题自定义
  themeConfig: {
    // 网站左上角 logo
    logo: "/logo.svg",
    // 顶部导航栏
    nav: [
      { text: "👋 About", link: "/AboutMe.md" },
      { text: "💭 Blogs", link: "/Notes/index" },
      { text: "🦄 Projects", link: "Projects.md" },
      { text: "👫 Friends", link: "Friends.md" },
    ],
    // 顶部导航栏左侧的社交平台跳转
    socialLinks: [{ icon: "github", link: "https://github.com/ZbWeR" }],
    // 首页底部版权声明
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present zbwer",
    },
    // 是否启动搜索功能
    search: {
      provider: "local",
    },
    // 【文章页面左侧导航】
    sidebar: {
      "/Notes/": getSidebar("/docs/src", "/Notes/"),
    },
    // 文章内导航栏标题
    outlineTitle: "导航栏",
  },
  // !请勿修改
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocFooterLastUpdated\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/UpdateTime.vue", import.meta.url)
          ),
        },
      ],
    },
  },
  lastUpdated: true,
});
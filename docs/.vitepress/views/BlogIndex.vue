<template>
  <VPTeamPage>
    <div class="relative flex justify-center mt-20 mb-16">
      <h1 class="text-5xl font-bold">Blogs</h1>
      <span
        class="absolute text-6xl tracking-wider text-transparent -translate-x-1/2 opacity-60 bottom-1/3 left-1/2 bg-gradient-to-b from-black/20 to-black/10 bg-clip-text dark:from-white/20 dark:to-white/10"
        >Blogs</span
      >
    </div>
    <div class="px-6 md:px-12 lg:px-16">
      <div class="flex flex-col gap-6">
        <BlogPart
          v-for="(item, index) in sidebarData.items"
          :key="index"
          :columnData="item"
        ></BlogPart>
      </div>
    </div>
  </VPTeamPage>
</template>

<script setup>
import { VPTeamPage } from "vitepress/theme";
import { useData } from "vitepress";
import BlogPart from "./BlogPart.vue";

const { site } = useData();
const sidebarData = site.value.themeConfig.sidebar["/Notes/"];

/** TODO:
 * 重写归档页面，参考官方文档 API：
 * https://skewb.gitee.io/vitepress/guide/data-loading.html#createcontentloader
 */
</script>

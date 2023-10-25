<template>
  <div
    class="max-w-3xl px-4 pb-8 mx-auto my-20 sm:px-6 xl:max-w-5xl xl:px-0 dark:divide-slate-200/20"
  >
    <!-- 标题 -->
    <div class="relative flex justify-center mt-2 0">
      <h1 class="text-5xl font-bold">{{ hero.title || "Blogs" }}</h1>
      <span
        class="absolute text-6xl tracking-wider text-transparent -translate-x-1/2 opacity-60 bottom-1/3 left-1/2 bg-gradient-to-b from-black/20 to-black/10 bg-clip-text dark:from-white/20 dark:to-white/10"
        >{{ hero.title || "Blogs" }}</span
      >
    </div>

    <p class="mt-2 text-center text-black/50 dark:text-slate-500">{{ hero.subTitle }}</p>

    <!-- 主体 -->
    <ul class="grid grid-cols-1 pt-6 mt-6 lg:gap-8 lg:grid-cols-3">
      <!-- 所有文章 -->
      <div
        :class="categories ? 'col-span-2' : 'col-span-3'"
        class="order-2 pt-6 lg:pt-0 lg:order-1 lg:mt-0"
      >
        <h1
          class="pb-2 text-3xl font-bold transition-all duration-300 border-b-4 border-sky-500 dark:border-sky-700 w-fit hover:pr-6"
        >
          ✨ 近期更新
        </h1>
        <div class="mt-4" :class="flow ? 'columns-1 lg:columns-2 gap-8' : ''">
          <PostCard
            v-for="(post, index) of posts"
            :key="post.date.time"
            :post="post"
            :flow="flow"
          ></PostCard>
        </div>
      </div>

      <!-- 文章分类 -->
      <div v-if="categories || features" class="order-1 col-span-1 lg:order-2">
        <Sidebar :types="categories"></Sidebar>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { data as posts } from "../utils/article.data.js";
import PostCard from "./BlogArchivePostCard.vue";
import Sidebar from "./BlogArchiveSidebar.vue";

// 获取标题 / 分类 / 推荐阅读
const { frontmatter: pageData, theme } = useData();
const { hero, types, features, flow } = pageData.value;

// 根据当前 page 名称获取 sidebar 数据并构造相应的类别
const pathname = window.location.pathname;
const sidebarData = theme.value.sidebar?.[pathname];
const categories =
  types || sidebarData?.items.map((item: any) => ({ name: item.text, link: item.link }));

// 根据 url 获取推荐阅读文章信息
// const featuresPost = features.map((url: string) =>
//   posts.find((post) => post.url === url)
// );
</script>

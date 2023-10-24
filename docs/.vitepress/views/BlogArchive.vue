<template>
  <div
    class="max-w-3xl px-4 pb-8 mx-auto mt-8 divide-y-2 divide-sky-400 sm:px-6 xl:max-w-5xl xl:px-0 dark:divide-slate-200/20"
  >
    <!-- 标题 -->
    <div class="py-6">
      <!-- 主标题 -->
      <h1
        class="text-3xl font-extrabold leading-9 tracking-wide text-gray-900 dark:text-sky-400 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
      >
        {{ hero?.title || "All Blog Posts" }}
      </h1>
      <!-- 页面描述 -->
      <h2 class="mt-6 text-lg leading-7 text-gray-500 dark:text-white">
        <p>{{ hero?.desc }}</p>
        <p>
          {{ hero?.subTitle }}
        </p>
      </h2>
    </div>

    <!-- 主体 -->
    <ul class="grid grid-cols-1 pt-6 lg:gap-6 lg:grid-cols-3">
      <!-- 所有文章 -->
      <div :class="categories ? 'col-span-2' : 'col-span-3'" class="order-2 lg:order-1">
        <PostCard
          v-for="(post, index) of posts"
          :key="post.date.time"
          :post="post"
          :index="index + 1"
        ></PostCard>
      </div>

      <!-- 文章分类 -->
      <div v-if="categories || features" class="order-1 col-span-1 lg:order-2">
        <Sidebar :types="categories" :features="featuresPost"></Sidebar>
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
const { hero, types, features } = pageData.value;

// 根据当前 page 名称获取 sidebar 数据并构造相应的类别
const pathname = window.location.pathname;
const sidebarData = theme.value.sidebar?.[pathname];
const categories =
  types || sidebarData?.items.map((item: any) => ({ name: item.text, link: item.link }));

// 根据 url 获取推荐阅读文章信息
const featuresPost = features.map((url: string) =>
  posts.find((post) => post.url === url)
);
</script>

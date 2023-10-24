<template>
  <div
    @click="openLink(post.url)"
    class="relative flex items-center gap-4 p-4 mt-4 transition-all bg-white border border-transparent rounded-lg shadow-md cursor-pointer sm:pl-0 dark:bg-slate-800/80 first:mt-0 dark:hover:bg-sky-950/80 hover:scale-[0.98] dark:hover:scale-100 dark:hover:border-sky-300"
  >
    <p
      class="hidden pl-4 font-mono text-4xl sm:block text-sky-400/50 dark:text-slate-200/50"
    >
      {{ index < 10 ? "0" + index : index }}
    </p>
    <div class="w-full">
      <p class="text-sm text-zinc-400">{{ post.date.string }}</p>
      <h1 class="my-2 text-2xl font-bold leading-8 tracking-tight">
        {{ getTitle(post) }}
      </h1>
      <p
        class="flex-1 mt-2 transition-all duration-300 text-black/60 dark:text-slate-500 dark:group-hover:text-white/80 group-hover:text-black"
      >
        {{ post.frontmatter.desc }}
      </p>

      <!-- tags -->
      <div class="flex justify-end w-full mt-2">
        <p
          v-for="(tag, tagIndex) in getTags(post)"
          :key="tagIndex"
          :class="tagIndex >= 1 ? 'ml-2' : ''"
          class="px-2 text-sm border rounded-full border-sky-400/80 dark:border-zinc-200 text-sky-400 dark:text-zinc-200"
        >
          {{ tag }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Post } from "../utils/article.data.js";
import { useRouter } from "vitepress";

const router = useRouter();
const { post, index } = defineProps(["post", "index"]);

// 获取文章标题信息，使用用户自定义的标题或是 md 文件名称
const getTitle = (post: Post): string => {
  const userTitle = post.frontmatter?.title;
  if (userTitle) return userTitle;

  const { url } = post;
  const matches = url.match(/.*\/(.*.html)/);

  // 如果匹配成功，返回匹配的部分作为标题，否则返回一个默认标题
  return matches ? matches[1].replace(".html", "") : "Error Title";
};

// 获取文章的前两个tag
const getTags = (post: Post) => {
  const rawTagString: string = post.frontmatter.tags;
  return rawTagString ? rawTagString.split("/").slice(0, 2) : [];
};

// 打开文章链接
const openLink = (link: string) => router.go(link);
</script>

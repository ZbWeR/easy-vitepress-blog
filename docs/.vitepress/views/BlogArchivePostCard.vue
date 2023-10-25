<template>
  <div
    @click="openLink(post.url)"
    class="relative py-4 mt-6 transition-all border rounded-lg cursor-pointer dark:border-transparent hover:border-indigo-800 break-inside-avoid-column bg-zinc-50/50 sm:pl-0 dark:bg-slate-800/80 first:mt-0 dark:hover:bg-sky-950/80 dark:hover:border-sky-300"
  >
    <!-- <p
      class="hidden pl-4 font-mono text-4xl sm:block text-sky-400/50 dark:text-slate-200/50"
    >
      {{ index < 10 ? "0" + index : index }}
    </p> -->
    <div class="w-full px-5">
      <p class="text-sm text-zinc-400">{{ post.date.string }}</p>
      <h1
        :class="flow ? '' : 'lg:text-2xl'"
        class="my-2 text-xl font-bold leading-8 tracking-tight"
      >
        {{ getTitle(post) }}
      </h1>
      <p
        class="flex-1 mt-2 leading-relaxed transition-all duration-300 text-black/60 dark:text-slate-500 dark:group-hover:text-white/80 group-hover:text-black"
      >
        {{ post.frontmatter.desc }}
      </p>

      <!-- tags -->
      <div class="flex justify-end w-full mt-3">
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
import { type Post } from "../utils/types.js";
import { fileName2Title } from "../userConfig/translations.js";
import { useRouter } from "vitepress";

const router = useRouter();
const { post, flow } = defineProps(["post", "flow"]);

// 获取文章标题信息，使用用户自定义的标题或是 md 文件名称
const getTitle = (post: Post): string => {
  const userTitle = post.frontmatter?.title;
  if (userTitle) return userTitle;

  const { url } = post;
  const matches = url.match(/.*\/(.*.html)/);
  let fileName = matches && matches[1].replace(".html", "");
  // 如果匹配成功，返回匹配的部分作为标题，否则返回一个默认标题
  if (fileName) return fileName2Title[fileName] || fileName;
  return "Error Title";
};

// 获取文章的前两个tag
const getTags = (post: Post) => {
  const rawTagString: string = post.frontmatter.tags;
  return rawTagString ? rawTagString.split("/").slice(0, 2) : [];
};

// 打开文章链接
const openLink = (link: string) => router.go(link);
</script>

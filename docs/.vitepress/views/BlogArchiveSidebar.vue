<template>
  <div class="lg:sticky lg:top-20">
    <!-- 类别 -->
    <div class="px-2 pb-3 border-b-2 border-sky-400 dark:border-sky-700">
      <h1
        class="pb-2 text-3xl font-bold transition-all duration-300 border-b-4 border-sky-500 dark:border-sky-700 w-fit hover:pr-6"
      >
        🏷️ 文章分类
      </h1>
      <div class="mt-4">
        <div
          @click="openLink(category.link)"
          class="relative px-2 py-1 transition-all rounded-lg hover:cursor-pointer hover:bg-sky-200/80 dark:hover:bg-sky-900/80"
          v-for="category in categories"
          :key="category.name"
        >
          <h1 class="font-bold">{{ category.name }}</h1>
          <p class="text-sm line-clamp-1">{{ category.desc }}</p>
          <div
            class="absolute flex items-center justify-end -translate-y-1/2 right-2 top-1/2"
          >
            <p>{{ category.icon || "🔗" }}</p>
            <svg
              class=""
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- 随机一言 -->
    <div
      class="flex gap-2 py-2 mt-4 rounded-lg shadow-md bg-amber-100/80 dark:bg-amber-950/80"
      v-if="quoteInfo.string"
    >
      <span class="self-start text-2xl">“</span>
      <div class="flex-1 my-4 indent-4">
        <h1>{{ quoteInfo.string }}</h1>
        <p v-if="quoteInfo.from" class="text-right">—— 《{{ quoteInfo.from }}》</p>
      </div>
      <span class="self-end text-2xl">”</span>
    </div>
    <!--TODO: 推荐阅读 -->
    <!-- <div class="p-4 mt-6 bg-slate-200">
    <div v-for="(post, index) in features" :key="index">
      <p>{{ post.frontmatter.desc }}</p>
    </div>
  </div> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { type Category } from "../utils/types.js";
import { useRouter } from "vitepress";

const router = useRouter();
const { types, features } = defineProps(["types", "features"]);
const categories: Category[] = [...types];

// 打开文章链接
const openLink = (link: string | undefined) => link && router.go(link);

// 随机一言
const quoteInfo = reactive({
  string: "",
  from: "",
});

onMounted(async () => {
  fetch("https://v1.hitokoto.cn?c=a&c=b&c=d&c=i&min_length=10")
    .then((response) => response.json())
    .then(({ hitokoto, from }) => {
      quoteInfo.string = hitokoto;
      quoteInfo.from = from;
    })
    .catch(console.error);
});
</script>

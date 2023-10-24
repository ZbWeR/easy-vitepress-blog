<template>
  <div class="w-full max-w-6xl mx-auto">
    <!-- 类别标题 -->
    <h1
      class="pb-2 text-3xl font-bold transition-all duration-300 border-b-4 border-sky-500 dark:border-sky-700 w-fit hover:pr-7"
    >
      {{ columnData.text }}
    </h1>
    <div class="flex flex-col mb-4 lg:flex-row">
      <!-- 最近更新的三篇文章 -->
      <li
        v-if="!latestThreeArticle.length"
        class="w-full mt-6 list-none lg:px-2 lg:w-[33%]"
      >
        <div
          class="p-4 transition-all duration-300 border rounded-lg dark:bg-slate-800 dark:border-slate-900 lg:dark:hover:border-sky-400 bg-zinc-50 group lg:hover:border-indigo-800"
        >
          敬请期待
        </div>
      </li>

      <li
        @click="openLink(item.link)"
        v-for="(item, index) in latestThreeArticle"
        :key="index"
        class="mt-6 lg:px-2 list-none min-w-full lg:min-w-[33%] flex-1 cursor-pointer"
      >
        <div
          class="flex flex-col justify-between p-4 transition-all duration-300 border rounded-lg lg:h-full dark:bg-slate-800 dark:border-slate-900 lg:dark:hover:border-sky-400 bg-zinc-50 group lg:hover:border-indigo-800 hover:-translate-y-3"
        >
          <!-- 更新时间 -->
          <p class="text-sm text-zinc-400">
            {{ getDateTime(item.updateTime) }}
          </p>
          <!-- 标题 -->
          <h1 class="mt-1 text-2xl font-bold">{{ item.text }}</h1>
          <!-- 摘要 -->
          <p
            class="flex-1 mt-2 transition-all duration-300 text-black/60 dark:text-slate-500 dark:group-hover:text-white/80 group-hover:text-black line-clamp-3"
          >
            {{ item.desc }}
          </p>
          <!-- tags -->
          <div class="flex justify-end w-full mt-2">
            <p
              v-for="(tag, tagIndex) in getTags(item)"
              :key="tagIndex"
              :class="tagIndex >= 1 ? 'ml-2' : ''"
              class="px-2 text-sm border rounded-full text-zinc-400 dark:text-zinc-200"
            >
              {{ tag }}
            </p>
          </div>
        </div>
      </li>
    </div>
    <div v-if="latestThreeArticle.length" class="flex justify-end pr-5">
      <div
        @click="openLink(columnData.link)"
        class="flex items-center transition-all cursor-pointer dark:text-slate-400 dark:hover:text-sky-400 text-black/50 hover:text-sky-500"
      >
        <p class="mr-1 text-sm">View More</p>
        <svg
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
</template>

<script setup>
import { useRouter } from "vitepress";
import { computed } from "vue";

const { columnData } = defineProps(["columnData"]);
const router = useRouter();

// 计算最新三篇更新的文章
const latestThreeArticle = computed(() => {
  let res = [...columnData.items];
  res.sort((a, b) => {
    const av = a["updateTime"] ? new Date(a["updateTime"]).valueOf() : 0;
    const bv = b["updateTime"] ? new Date(b["updateTime"]).valueOf() : 0;
    return bv - av;
  });
  return res.slice(0, 3);
});

// 格式化文章更新时间
function getDateTime(item) {
  let date = new Date(item);
  let formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
}

// 获取文章的前两个tag
function getTags(item) {
  if (!item?.tags) return [];
  let tagsArr = item.tags.split("/").slice(0, 2);
  return tagsArr;
}
// 打开文章连接
function openLink(link) {
  router.go(link);
}
</script>

<style scoped>
*::-webkit-scrollbar {
  display: none;
}
</style>

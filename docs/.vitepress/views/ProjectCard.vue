<template>
  <div
    @click="openLink"
    class="overflow-hidden transition-all duration-300 border rounded-lg cursor-pointer hover:border-indigo-800 dark:hover:border-sky-300 bg-slate-50 dark:bg-slate-800 dark:border-transparent group"
  >
    <!-- banner -->
    <div class="w-full h-40">
      <div
        :style="{ 'background-image': `url(${projectsInfo.banner})` }"
        class="w-full h-full bg-center bg-no-repeat bg-cover"
      ></div>
    </div>
    <!-- 文字 -->
    <div class="p-4 pb-6">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-bold">{{ title }}</h1>
        <p
          v-if="tag"
          class="text-[12px] px-2 rounded-full py-0.5"
          :class="littleBadgeColor"
        >
          {{ tag }}
        </p>
      </div>
      <p
        class="mt-2 text-sm transition-all duration-300 line-clamp-2 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const projectsInfo = defineProps(["banner", "title", "description", "link", "tag"]);

const littleBadgeColor = computed(() => {
  switch (projectsInfo.tag) {
    case "JavaScript":
      return "bg-yellow-400 text-white";
    case "Python":
      return "bg-sky-700 text-white";
    case "Vue":
      return "bg-teal-400 text-white";
    case "TypeScript":
      return "bg-sky-400 text-white";
    case "C++":
      return "bg-red-400 text-white";
    default:
      return "border";
  }
});

function openLink() {
  window.open(projectsInfo.link, "_blank");
}
</script>

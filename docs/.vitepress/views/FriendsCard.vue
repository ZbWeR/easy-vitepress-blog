<template>
  <div
    @click="openLink"
    class="flex flex-col items-center w-full h-full p-6 transition-all duration-300 border cursor-pointer bg-stripe group hover:border-indigo-800 dark:hover:border-sky-300 dark:border-transparent bg-slate-50 dark:bg-slate-800 dark:text-slate-300 rounded-xl"
  >
    <!-- 头像 -->
    <div class="w-16 h-16 overflow-hidden rounded-full VP-shadow">
      <img :src="avatar" :alt="name" />
    </div>
    <!-- 简介 -->
    <div class="w-full text-center">
      <h1 class="text-lg font-bold tracking-wider dark:text-zinc-200">
        {{ name }}
      </h1>
      <div>
        <Badge :color="color || 'sky'">{{ tag }}</Badge>
      </div>
      <p class="w-full mt-1 break-words line-clamp-2 dark:text-zinc-400">
        {{ title }}
      </p>
      <p
        class="inline-block mt-2 text-sm text-indigo-400 transition-all duration-300 border-b border-indigo-400 dark:text-sky-400 dark:border-sky-400 sm:opacity-0 group-hover:opacity-100"
      >
        🔗{{ shortLink }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Badge from "../components/Badge.vue";

const friendsInfo = defineProps(["avatar", "name", "title", "link", "tag", "color"]);

const shortLink = computed(() => {
  let baseLink = friendsInfo.link;
  const regex = /^(http|https):\/\/(.*)$/;
  return baseLink.replace(regex, "$2");
});

function openLink() {
  window.open(friendsInfo.link, "_blank");
}
</script>

<style scoped>
.VP-shadow {
  box-shadow: var(--vp-shadow-3);
}
.bg-stripe:hover {
  background-image: repeating-linear-gradient(
    45deg,
    hsl(0 0% 100%),
    hsl(0 0% 100%) 13px,
    hsl(0 0% 95%) 13px,
    hsl(0 0% 95%) 14px
  );
}
.dark .bg-stripe:hover {
  background-image: repeating-linear-gradient(
    45deg,
    hsl(202, 80%, 24%),
    hsl(202, 80%, 24%) 13px,
    hsl(200, 80%, 20%) 13px,
    hsl(200, 80%, 20%) 14px
  );
}
</style>

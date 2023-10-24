<template>
  <div
    @click="openLink"
    class="link-card my-3 p-4 transition-all duration-300 rounded-lg shadow-sm cursor-pointer hover:bg-blue-100/80 dark:shadow-sky-900/80 hover:scale-[0.99] shadow-blue-400/60 dark:bg-sky-950 dark:hover:bg-sky-950/80 bg-blue-200/30 group"
  >
    <header class="font-bold">{{ icon || "🐳" }} {{ desc }}</header>
    <footer
      class="mt-1 transition-all duration-300 text-slate-500 dark:text-slate-400 dark:group-hover:text-sky-400 line-clamp-1"
    >
      {{ link }}
    </footer>
  </div>
</template>

<script setup>
const { desc, link, icon } = defineProps(["desc", "link", "icon"]);
function openLink() {
  window.open(link, "_blank");
}
</script>

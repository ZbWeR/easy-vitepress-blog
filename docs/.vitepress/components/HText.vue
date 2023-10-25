<template>
  <span class="px-1 rounded-sm" :class="colorClass" :style="colorStyle()">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
const { type, bg, color } = defineProps(["type", "color", "bg"]);

const type2Color: Record<string, any> = {
  true: "text-teal-700 bg-teal-100 dark:text-teal-400 dark:bg-teal-900",
  false: "text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900",
  warn: "text-yellow-700 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900",
  info: "text-sky-700 bg-sky-100 dark:text-sky-300 dark:bg-sky-900",
};

const colorClass = computed(() => {
  if (type) return type2Color[type];
  if (bg || color) return "";
  const values = Object.values(type2Color);
  const rand = Math.floor(Math.random() * values.length);
  return values[rand];
});

const colorStyle = () => {
  if (type) return;
  const styles = {
    color,
    "background-color": bg,
  };
  return Object.entries(styles)
    .map(([k, v]) => `${k}:${v}`)
    .join("; ");
};
</script>

<template>
  <span class="badge text-slate-100" :class="getColor">
    <slot>UESTCer</slot>
  </span>
</template>

<script setup>
import { computed } from "vue";
const { color } = defineProps(["color"]);
const getColor = computed(() => {
  switch (color) {
    case "sky":
      return "bg-sky-500";
    case "pink":
      return "bg-pink-500";
    case "indigo":
      return "bg-indigo-500";
    case "orange":
      return "bg-orange-500";
    case "green":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
});
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0 10px;
  line-height: 22px;
  font-size: 12px;
  border-radius: 12px;
}
</style>

<template>
  <div v-if="lastUpdated" class="py-1 text-sm font-medium">
    📝 Last updated: {{ lastUpdated }}
  </div>
</template>

<script setup>
import { useData } from "vitepress";
import { computed } from "vue";
import dayjs from "dayjs";

const { frontmatter, page } = useData();

const lastUpdated = computed(() => {
  // 禁用日期判定
  if (frontmatter.value.lastUpdated === false) return "";
  // 优先取博文前的自定义时间日期 `updateTime`
  else if (frontmatter.value.updateTime) return frontmatter.value.updateTime;
  // 取系统生成的 git 提交时间
  else return dayjs(page.value.lastUpdated).format("YYYY-MM-DD HH:mm") || "";
});
</script>

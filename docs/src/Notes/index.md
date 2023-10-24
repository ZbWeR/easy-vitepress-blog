---
layout: page
sidebar: false

hero:
  title: "🐳 Blog Posts"
  desc: "总要有个写东西的地方..."
  subTitle: "Learning notes, frontend wisdom & interview experiences from a dedicated web enthusiast."

types:
  - name: "面经分享"
    desc: "interview experiences"
    link: "/Notes/Interviews/"
    icon: "🏃"
  - name: "学习笔记"
    desc: "front-end technologies"
    link: "/Notes/Learning/"
  - name: "随想杂文"
    desc: "personal musings"
    link: "/Notes/Thoughts/"
    icon: "✨"

features:
  - "/Notes/Learning/Vue 源码 - 渲染器.html"
---

<script setup>
import BlogArchive from '../../.vitepress/views/BlogArchive.vue'
</script>

<BlogArchive/>

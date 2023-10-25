---
title: "🚀 快速上手"
outline: deep
desc: "十分钟快速搭建漂亮的个人博客！"
tags: "Tutorial"
updateTime: "2023-10-25 20:48"
---

# 🚀 快速上手

## 前置条件

确保您满足以下条件：

- Node.js 版本不低于 18
- 使用支持 Markdown 语法的文本编辑器，例如 Visual Studio Code
- 熟悉 Git 基本操作，并有 Github 使用经验

## 安装与运行

### 创建并拉取仓库

1. 打开该项目的 Github 仓库链接。
2. 点击右上角的 `Use this template` 按钮，然后选择 `Create a new repository`。

此时，你会被重定向到创建新仓库的页面，在此页面你可以**自定义**你的仓库名称，描述以及可见性。

<LinkCard desc="easy-vitepress-blog | 十分钟快速搭建个人博客" link="https://github.com/ZbWeR/easy-vitepress-blog"/>

3. 创建完成后，你会被重定向到你刚刚创建的仓库页面。点击右上角的 `Code` 按钮，复制 HTTPS 链接。
4. 在您的本地命令行界面中，使用以下命令拉取仓库：

```bash
git clone <你复制的HTTPS链接>
```

### 安装依赖 & 初次运行

在 VSCode(或其他编辑器) 中打开你刚刚拉取的仓库，然后运行以下命令以安装项目所需的依赖：

```bash
npm install
```

安装依赖完成后，运行以下命令启动项目：

```bash
npm run docs:dev
```

这个命令将启动一个本地开发服务器，并且会进行热更新。如果一切顺利，你将在本地看到和本网站一模一样的界面。

:::tip 🎉 现在，你可以开始编写你的博客了！
【强烈建议】：请在 `/docs/src/Notes` 目录下编写你的 markdown 文件或是创建子目录。
:::

## 下一步

**如果你从未使用过 VitePress**：建议阅读官方文档了解基本路由知识

<LinkCard link="https://skewb.gitee.io/vitepress/guide/routing.html" desc="【VitePress 民间翻译】 路由"/>
<LinkCard link="https://vitepress.dev/guide/routing" desc="【VitePress 官方文档】 Routing"/>

随后：

- 如果你想自定义网站的外观，请查看 [个性化配置](./reference.md)。
- 如果你已经完成了博客站点的构建，可以阅读 [部署指南](./deployment.md) 了解如何部署你的站点。

## 其他

以下是该项目的目录结构简要介绍，省略了部分不必要的信息

（如果你是一名前端开发人员，你可能已经知道它们的含义）：

```js
.
├─ docs
│  ├─ .vitepress
│  │  ├─ components
│  │  ├─ userConfig // 用户数据：友链...
│  │  └─ config.mjs // vitepress 配置入口
│  └─ src           // 存放所有的笔记文件
│     ├─ public     // 存放一些静态资源，它们在构建后将保留原始名称
│     ├─ Notes      // markdown 笔记文件
│     ├─ index.md       // 主页
│     ├─ AboutMe.md     // “关于”页
│     ├─ Friends.md     // 友链页
│     └─ Projects.md    // “项目”页
│
├─ tsconfig.json
├─ tailwind.config.js
└─ package.json

```

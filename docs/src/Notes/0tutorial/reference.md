---
title: "🎨 配置参考"
outline: deep
updateTime: "2023-10-25 00:21"
---

# 个性化配置

本文将介绍如何进行博客项目的个性化配置，包括：

1. 修改网站 logo 与标题
2. 设置首页中的 logo、标题、副标题等
3. 设置归档页中的标题、描述等

## 网站

该部分配置文件位于 **`/docs/.vitepress/config.mjs`**

### 基础配置

以下参数可以用于进行基础配置：

- `title`：定义网站左上角显示的名称
- `titleTemplate`：设定标签栏中的模板名称（如果你觉得抽象，试一试就知道啦！）
- `head`：主要用于设置标签栏中的 logo，具体代码示例如下。更多功能请参阅原生文档。

```js
export default defineConfig({
  // ... 省略其他配置
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
});
```

- `description`: 对于网站的描述，将用于 SEO 优化，可理解为更容易被搜索引擎捕获
- `srcDir`: 设置 md 文件根目录，在本项目中请<HText type='warn'>谨慎修改</HText>

### 主题配置

主题配置位于 `themeConfig` 字段中，示例代码如下：

```js{4}
export default defineConfig({
  // ... 省略其他配置
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    // ...省略其他配置
  },
});
```

以下为主题配置选项：

- `logo`: 网站左定义网站左上角展示的 logo
- `nav`: 设定顶部导航栏的跳转链接，具体代码示例如下：

```js
export default defineConfig({
  // ...
  themeConfig: {
    // ...
    nav: [
      { text: "👋 About", link: "/AboutMe.md" },
      { text: "💭 Blogs", link: "/Notes/index" },
      { text: "🦄 Projects", link: "Projects.md" },
      { text: "👫 Friends", link: "Friends.md" },
    ],
  },
});
```

- `socialLinks`: 设定顶部导航栏左侧的社交平台跳转，具体代码示例如下：

```js
export default defineConfig({
  // ...
  themeConfig: {
    // ...
    socialLinks: [{ icon: "github", link: "https://github.com/ZbWeR" }],
  },
});
```

- `footer`: 设置底部版权声明
- `outlineTitle`: 设定文章内容页面右侧目录的标题
- `sidebar`: 设定文章页面左侧标题，具体代码示例如下：

```js
export default defineConfig({
  // ...
  themeConfig: {
    // ...
    sidebar: {
      // Notes 页面下的侧边栏，你可以为不同页面添加不同的侧边栏（此功能仍在测试中）
      "/Notes/": getSidebar("/docs/src", "/Notes/"),
    },
  },
});
```

## 首页

配置文件位于 **`/docs/src/index.md`**。您可以参考**本文末尾**的原生文档链接以获取详细的配置信息。

另外，如果您希望对标题渐变色、Logo 背景光晕以及按钮颜色进行修改，可以在 `/docs/.vitepress/theme/var.css` 中进行。请注意，这可能需要您具有一定的 CSS 知识。

## 友链

这是本项目在 Vitepress 基础上新增的页面，用于展示你的社交网络与友情链接。

该部分配置文件位于 `/docs/.vitepress/userConfig/friendsInfo.ts`

以下是字段说明：

```js
  avatar: string;   // 头像链接
  name: string;     // 好友 id
  link: string;     // 好友的博客链接

  // (可选)关于好友的简介
  title?: string;
  // (可选)一些有趣的标签
  tag?: string;
  // (可选)设置标签的颜色，可选值 'sky' | 'pink' | 'indigo' | 'orange' | 'green'
  color?: string;
```

## 项目介绍

这是本项目在 Vitepress 基础上新增的页面，用于展示你的开源项目。

该部分配置文件位于 `/docs/.vitepress/userConfig/projectsInfo.ts`

以下是字段说明：

```js
  // 图片链接：或许你可以放一张二次元美图()
  banner: string;
  // 项目的标题
  title: string;
  // (可选)项目标题右侧的 tag
  tag?: string;
  // 项目简介
  description: string;
  // 项目开源仓库链接
  link: string;
```

## 归档

这是本项目在 Vitepress 基础上新增的页面，用于汇总展示所有的文章信息。

::: warning
🚧 很抱歉目前只能展示 `/docs/src/Notes` 目录下的所有文章信息
:::

该部分配置文件位于 `/docs/src/Notes/index.md`

以下是字段说明 & 示例代码：

::: code-group

```yaml [字段说明]
# 所有字段均为字符串类型，请使用【引号】包裹
hero:
  title: 超级大的标题
  desc: 小一点的标题
  subTitle: 小一点的标题
# 页面右侧的分类，【数组类型】不要缺少前缀符号 -
types:
  - name: 类别名称
    desc: 简单介绍
    link: 跳转链接
    icon: 右侧小图标
```

```yaml [示例代码]
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
```

:::

## 更多信息

更多配置信息，请参阅以下链接：

<LinkCard link="https://vitepress.dev/reference/site-config#vite-vue-markdown-config" desc="【VitePress 官方文档】 Site Config"/>

<LinkCard link="https://skewb.gitee.io/vitepress/reference/site-config.html" desc="【VitePress 民间翻译】 站点配置"/>

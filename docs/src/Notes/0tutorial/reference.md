---
title: "🎨 配置参考"
outline: deep
desc: "个性化配置指南，让你拥有一个定制化的，漂漂亮亮的博客网站！"
tags: "Tutorial"
updateTime: "2023-10-25 14:53"
---

# 个性化配置

本文将介绍如何进行博客项目的个性化配置，包括：

1. 修改网站 logo 与标题
2. 设置首页中的 logo、标题、副标题等
3. 设置归档页中的标题、描述等

:::warning 遇见错误

配置过程中遇见错误，极有可能是路由出错，例如 `link` 字段，请仔细检查

:::

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
- `srcDir`: 设置 Markdown 文件根目录，在本项目中请<HText type='warn'>谨慎修改</HText>

### 主题配置

主题配置信息位于 `themeConfig` 字段中，示例代码如下：

```js:line-numbers {4}
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

- `logo`: 定义网站左上角展示的 logo
- `nav`: 设定顶部导航栏的跳转链接，具体代码示例如下：

```js:line-numbers
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

```js:line-numbers
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

```js:line-numbers
export default defineConfig({
  // ...
  themeConfig: {
    // ...
    sidebar: {
      // 注意开头结尾均为反斜杠
      // Notes 页面下的侧边栏，你可以为不同页面添加不同的侧边栏（此功能仍在测试中）
      "/Notes/": getSidebar("/docs/src", "/Notes/"),
    },
  },
});
```

**注意**:

sidebar 中默认使用的是目录或文件名称。例如，如果你的目录名为 `0tutorial`，那么它在侧边栏中将会显示为 `0tutorial`。你可以在 `/docs/.vitepress/userConfig/translations.ts` 中为其设置别名。例如:

```js
export const fileName2Title: Record<string, string> = {
  "0tutorial": "🔥 使用指南",
};
```

随后它将表现为 `🔥 使用指南`。请注意，侧边栏的排序是按照字典序进行的，你可以通过设置别名的方式来调整排序。

## 首页

配置文件位于 **`/docs/src/index.md`**。您可以参考**本文末尾**的原生文档链接以获取详细的配置信息。

另外，如果您希望对标题渐变色、Logo 背景光晕以及按钮颜色进行修改，可以在 `/docs/.vitepress/theme/var.css` 中进行。请注意，这可能需要您具有一定的 CSS 知识。

## 归档

这是本项目在 Vitepress 基础上新增的页面，用于汇总展示所有的文章信息。

::: warning
🚧 很抱歉目前只能展示 `/docs/src/Notes` 目录下的所有文章信息
:::

该部分配置文件位于 `/docs/src/Notes/index.md`

以下是字段说明 & 示例代码：

::: code-group

```yaml:line-numbers [字段说明]
# 所有字段均为字符串类型，请使用【引号】包裹
hero:
  title: 超级大的标题
  subTitle: 小一点的标题
# 页面右侧的分类，【数组类型】不要缺少前缀符号 -
types:
  - name: 类别名称
    desc: 简单介绍
    link: 跳转链接
    icon: 右侧小图标
flow: 是否开启瀑布流布局
```

```yaml:line-numbers [示例代码]
hero:
  title: "Blogs"
  subTitle: "总要有个写东西的地方..."

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
flow: true
```

:::

## 文章详情

为了丰富归档页面的内容信息，本项目在 markdown 文件头部引入了更多的字段。

你可以在任意 Markdown 文件头部插入这些字段，例如：

::: code-group

```md [example.md]
---
title: "🎨 配置参考"
desc: "本文将介绍如何进行博客项目的个性化配置，包括如何修改"
tags: "Tutorial/Setting"
updateTime: "2023-10-25 00:21"
---

此处编写你的 Markdown 正文
```

:::
以下是字段说明：

- `title`: 文章的标题。文章默认的标题通常是 Markdown 的文件名称，有时你可能希望它具有一个别名。例如，你可能偏好文件命名不包含中文，但希望渲染在网页上为中文。
- `desc`: 文章的摘要。
- `tags`: 文章标签。用 `/` 隔开多个标签，最终只会渲染前两个标签。请注意该选项暂无实际作用，仅出于美观考虑。
- `updateTime`: 文章的发布或更新日期。**强烈建议**在所有 Markdown 文件中填写该字段。它决定了你的 Markdown 文件在侧边栏中的顺序以及在归档页面的顺序。

::: tip
如果你使用的是 VSCode，那么你可以使用 【`Insert Date String`】 这个插件来快速生成 `updateTime` 字段。该插件的默认快捷键是 `ctrl`+`alt`+`i`.
:::

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

## 更多信息

更多配置信息，请参阅以下链接：

<LinkCard link="https://vitepress.dev/reference/site-config#vite-vue-markdown-config" desc="【VitePress 官方文档】 Site Config"/>

<LinkCard link="https://skewb.gitee.io/vitepress/reference/site-config.html" desc="【VitePress 民间翻译】 站点配置"/>

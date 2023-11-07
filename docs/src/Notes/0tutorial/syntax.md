---
title: "🌈 语法介绍"
desc: "关于本项目中 Markdown 拓展语法介绍与示例。包括代码组，链接卡片，文本高亮，自定义容器等等"
tags: "Tutorial"
updateTime: "2023-10-24 14:56"
outline: deep
---

# 语法介绍

VitePress 提供了内置的 Markdown 扩展功能，为了进一步优化写作和展示体验，我们在这个项目中也封装了一些通用组件。这篇文章将详细介绍 VitePress 的常见扩展语法以及本项目中的自定义组件。

## 拓展语法

### 自定义容器

自定义容器是一个特别的元素，它具有加粗的标题和高亮的背景。此外，它内部还支持标准的 Markdown 语法。

**输入：**

```md
::: info 【你可以自定义标题名称】
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出：**
::: info 【你可以自定义标题名称】
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### 代码块

关于代码块的更多详细描述和示例，请参考官方文档。这里只给出简单的使用示例。

<LinkCard desc="MarkDown Extensions | VitePress" link="https://vitepress.dev/guide/markdown#line-highlighting-in-code-blocks"/>

#### 普通代码块

**输入：**

````md
```js
const str = "hello world";
console.log(str);
```
````

**输出：**

```js
const str = "hello world";
console.log(str);
```

#### 高亮显示某些行

**输入：**

::: code-group

````md [普通]
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

````md [其他颜色]
```js
export default {
  data () {
    return {
    // code 之后只需要一个空格，此处为了演示方便
        msg: 'Removed' // [!code  --]
        msg: 'Added'   // [!code  ++]

        msg: 'Error',  // [!code  error]
        msg: 'Warning' // [!code  warning]
    }
  }
}
```
````

:::

**输出：**

::: code-group

```js{1,4,6-8} [普通]
export default { // Highlighted
  data () {
    return {
      msg: `高亮状态!
      这一行并没有被高亮,
      但是以下两行处于高亮状态`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

```js [其他颜色]
export default {
  data () {
    return {
        // code 之后只需要一个空格，此处为了演示方便
        msg: 'Removed' // [!code --]
        msg: 'Added' // [!code ++]

        msg: 'Error', // [!code error]
        msg: 'Warning' // [!code warning]
    }
  }
}
```

:::

#### 显示行号

**输入：**

````md
```js:line-numbers
const str = "hello world";
console.log(str);
```
````

**输出：**

```js:line-numbers
const str = "hello world";
console.log(str);
```

#### 代码组

**输入：**

````md
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

你还可以在 code-group 中从文件导入代码，例如

<<< ./code-group.example.js

:::
````

**输出：**

:::code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

<<< ./code-group.example.js
:::

## 通用组件

在 Markdown 文件中，你可以直接使用 HTML 语法来调用我们的通用组件。

### 链接卡片

**输入：**

```html
<!-- 在 desc 中输入网站描述 link 中输入网站链接 -->
<!-- 【别忘记闭合标签！！！】 -->
<LinkCard desc="zbwer's Blog" link="https://blog.zbwer.work/" />
```

**输出：**

<LinkCard desc="zbwer's Blog" link="https://blog.zbwer.work/" />

### 高亮文本

该组件会设置文本颜色与背景色，内置了四种颜色。你可以通过 `type` 属性进行指定，如果该属性没有被设置，那么将在内置颜色中进行**随机**选择。

当然，你也可以自己指定文本颜色(`color`)与背景色(`bg`)。

**输入：**

```html
<HText type="true">嗨 Hi 你好鸭！</HText>
<HText type="false">嗨 Hi 你好鸭！</HText>
<HText type="warn">嗨 Hi 你好鸭！</HText>
<HText type="info">嗨 Hi 你好鸭！</HText>
<HText color="#fff" bg="#5672cd">嗨 Hi 你好鸭！</HText>
```

**输出：**

<HText type="true">嗨 Hi 你好鸭！</HText>
<HText type="false">嗨 Hi 你好鸭！</HText>
<HText type="warn">嗨 Hi 你好鸭！</HText>
<HText type="info">嗨 Hi 你好鸭！</HText>
<HText color="#fff" bg="#5672cd">嗨 Hi 你好鸭！</HText>

## 数学公式

### 行内公式

**输入：**

```md
这是一个行内公式: $\frac{1}{a+b}$
```

**输出：**

这是一个行内公式: $\frac{1}{a+b}$

### 公式块

**输入：**

```md
$$ \Sigma^i a_i=0 $$
```

**输出：**
$$ \Sigma^i_N a_i=0 $$

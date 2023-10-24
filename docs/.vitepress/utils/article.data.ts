import { createContentLoader } from "vitepress";

export interface Post {
  url: string;
  frontmatter: DefaultFrontmatter & Record<string, any>;
  date: {
    time: number;
    string: string;
  };
}
declare const data: Post[];
export { data };

/**
 * 返回 src/Notes/ 目录下所有 md 文档信息
 */
export default createContentLoader("src/Notes/**/*.md", {
  transform(rawData): Post[] {
    return rawData
      .map(({ url, frontmatter }) => ({
        url,
        frontmatter,
        date: formatDate(frontmatter.updateTime),
      }))
      .filter((post) => /.html/.test(post.url) && !post.frontmatter.hidden)
      .sort((a, b) => b.date.time - a.date.time);
  },
});

/**
 * 格式化文章更新时间
 * @param raw - 日期字符串
 */
function formatDate(raw: string | undefined): Post["date"] {
  if (!raw)
    return {
      time: 0,
      string: "",
    };
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
// 标题
interface Hero {
  title?: string;
  desc?: string;
  subTitle?: string;
}
// 侧边栏：类别
export interface Category {
  name: string;
  link: string;
  desc?: string;
  icon?: string;
}

interface DefaultFrontmatter {
  hero?: Hero;
  types?: Category[];
}

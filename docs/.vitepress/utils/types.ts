// 侧边栏：类别
export interface Category {
  name: string;
  link: string;
  desc?: string;
  icon?: string;
}

// 博客属性
export interface Post {
  url: string;
  frontmatter: DefaultFrontmatter & Record<string, any>;
  date: {
    time: number;
    string: string;
  };
}
// Frontmatter 默认属性
interface DefaultFrontmatter {
  hero?: Hero;
  types?: Category[];
}
// 标题
interface Hero {
  title?: string;
  desc?: string;
  subTitle?: string;
}

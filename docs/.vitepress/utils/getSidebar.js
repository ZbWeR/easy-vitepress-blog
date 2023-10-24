import { readdirSync, statSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { fileName2Title } from "../userConfig/translations";

const INDEX_FILE = "index";

/**
 * 生成 vitepress 所需的 sidebar 配置信息
 * @param {string} notesRootPath - md 笔记文件存放的根目录，将从该目录开始解析
 * @param {string} pagePath - 要解析的目录名称
 * @param {string} prefix - 不包含根目录的前缀路由
 */
function generate(notesRootPath, pagePath, prefix = "", depth = 0) {
  if (depth >= 4) return [];

  // 构造绝对路径，用于读取目录下的所有文件信息
  const dir = path.join(process.cwd(), notesRootPath, prefix, pagePath);
  // 构造相对路径，用于设置 sidebar 中的 link 字段
  const relDir = path.join(prefix, pagePath);
  // sidebar 初始化
  let sidebarSection = {
    text: transformName(pagePath.replace(/\//g, "")),
    items: [],
    collapsed: depth >= 2,
  };

  const files = readdirSync(dir) || [];
  files.sort();

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = statSync(filePath);
    // 对于目录
    if (stats.isDirectory()) {
      const childItems = generate(notesRootPath, file, relDir, depth + 1);
      // 剔除不包含 md 文件的目录
      if (childItems[0].items.length === 0) continue;
      sidebarSection.items.push(...childItems);
    }
    // 对于文件
    else {
      const fileName = file.replace(/\.md$/, "");
      // 处理非 md 文件
      if (file === fileName) continue;

      // 获取头部元数据
      const { data = {} } = matter.read(filePath) || {};
      const rawLink = path.join(relDir, fileName);
      const normalizedLink = rawLink.split("\\").join("/");
      const itemData = {
        // ...data,
        link: normalizedLink,
      };

      // 处理 index 文件
      if (fileName === INDEX_FILE) {
        sidebarSection = { ...itemData, ...sidebarSection };
      } else sidebarSection.items.push({ ...itemData, text: transformName(fileName) });
    }
  }
  return [sidebarSection];
}

/**
 * 获取不同页面的 sidebar 配置信息
 * @param {string} notesRootPath - md 笔记文件存放的根目录，将从该目录开始解析
 * @param {string} pagePath - 要解析的目录名称
 */
export function getSidebar(notesRootPath, pagePath) {
  const sidebarConfig = generate(notesRootPath, pagePath);
  return {
    text: sidebarConfig[0].text,
    items: sidebarConfig[0].items,
  };
}

/**
 * 将文件或目录名翻译成自定义名称
 * @param {string} name - 文件或目录名
 */
function transformName(name) {
  return fileName2Title[name] || name;
}

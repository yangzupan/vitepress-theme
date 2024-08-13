import { defineConfig } from 'vitepress'
import { themeConfig } from './config/theme';
import { head } from './config/head';
import { markdown } from './config/markdown';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 标题
  title: "标题",
  // 标题模板
  titleTemplate: ':title - 标题后缀',
  // 站点的描述
  description: "这是描述",
  //head配置
  head,
  // 站点的 lang 属性
  lang: 'zh-CN',
  // 站点基本URL
  base: '/',

  // 主题模式
  // appearance:true,

  // 最后更新
  lastUpdated: true,

  // markdown配置
  markdown,

  // 站点地图
  sitemap: {
    hostname: '/'
  },

  // 主题配置
  themeConfig, 

})

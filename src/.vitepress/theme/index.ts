// https://vitepress.dev/zh/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import MyLayout from './MyLayout.vue';
import { Tab, Tabs } from './components/tabs/index'

// import Card from './components/global/Card.vue'
import Card from './components/Card.vue'
import CardGrid from './components/CardGrid.vue'
import LinkCard from './components/LinkCard.vue'
import Plot from './components/Plot.vue'
// import BackToTop from './components/global/BackToTop.vue';

import ArticleMetadata from './components/ArticleMetadata.vue'
import BackToTop from './components/BackToTop/index'


import TimeLine from './components/TimeLine.vue'



// 导入样式
import './styles/style.css';



export default {
  extends: DefaultTheme,
  // 布局
  Layout: MyLayout,

  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  
/**
 * 增强Vue应用实例，为其注册全局组件和配置
 * @param {Object} app - Vue应用实例
 * @param {Object} router - Vue路由实例
 * @param {Object} siteData - 站点数据，用于配置和展示
 */
enhanceApp({ app, router, siteData }) {
  // 注册全局组件，用于展示不同类型的内容
  // 例如，'Posts'组件用于展示文章列表
  // 'Archives'组件用于展示文章归档
  // 'Tags'组件用于展示标签云

  // 当页面滚动超过100px时，显示返回顶部按钮，帮助用户快速回到页面顶部
  BackToTop({
    threshold: 100
  })

  // 注册用于展示文章元数据的组件，如标题、作者、日期等
  app.component('ArticleMetadata', ArticleMetadata)

  // 注册Tab组件及其容器组件，用于实现选项卡界面
  app.component('Tab', Tab)
  app.component('Tabs', Tabs)

  // 注册一系列卡片样式组件，用于展示不同类型的内容
  app.component('Card', Card)
  app.component('CardGrid', CardGrid)
  app.component('LinkCard', LinkCard)
  
  // 注册用于数据可视化展示的组件
  app.component('Plot', Plot)
  app.component('plot', Plot)


  app.component('TimeLine', TimeLine)
  app.component('timeline', TimeLine)
}
} satisfies Theme

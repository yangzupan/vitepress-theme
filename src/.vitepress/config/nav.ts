import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
// 首页·
{ text: '首页', link: '/' },
{ text: '演示', link: '/markdown-examples' },
{
  text: '多级标题',
  items: [
    {
      text: '分类一',
      items: [
        { text: 'XXX', link: '/xxx/' },
        { text: 'XXX', link: '/xxx/' },
        { text: 'XXX', link: '/xxx/' },
      ]
    },
    {
      text: '分类二',
      items: [
        { text: 'XXX', link: '/xxx/' },
        { text: 'XXX', link: '/xxx/' },
        { text: 'XXX', link: '/xxx/' },
      ]
    },
    {
      text: '分类三',
      items: [
        { text: 'XXX', link: '/xxx/' },
        { text: 'XXX', link: '/xxx/' },
        { text: 'XXX', link: '/xxx/' },
      ]
    },
    
  ]
},
]
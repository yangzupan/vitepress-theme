import type { DefaultTheme } from 'vitepress';
import { nav } from './nav';
import { generateSidebar } from 'vitepress-sidebar';
import { sidebar } from './sidebar';


const vitepressSidebarOptions = {
    /* Options... */
    documentRootPath: "src",

};
export const themeConfig: DefaultTheme.Config = {
    // https://vitepress.dev/reference/default-theme-config

    // logo
    // logo: '/logo.svg',

    // 站点标题
    siteTitle: "站点标题",

    // 导航栏配置
    nav,

    // 侧边栏配置
    // sidebar,
    sidebar: generateSidebar(vitepressSidebarOptions),

    // 侧边目录层级
    outline: {
        level: 'deep',
        label: "目录",
    },

    // 社交链接
    socialLinks: [
        { icon: 'github', link: 'https://github.com/yangzupan/vitepress-theme-pange' }
    ],

    // 页脚
    // footer: {
    //     // message: 'Released under the MIT License.',
    //     copyright: 'Copyright © 2021 - 2024 <a href="https://www.yangzupan.com/" target="blank"> 杨祖攀 </a> All Rights Reserved.'
    // },
    // 编辑链接
    // editLink: {
    //   pattern: 'https://github.com/yangzupan/wiki/edit/main/src/:path',
    //   text: '编辑此页面'
    // },

    // 最近更新
    lastUpdated: {
        text: '最后更新于',
        formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
        }
    },
    // 文档页脚导航
    docFooter: {
        prev: '上一页',
        next: '下一页'
    },
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lightModeSwitchTitle: "切换到白色主题",
    darkModeSwitchTitle: "切换到黑暗主题",
    // 外链图标
    // externalLinkIcon: true,
    // 搜索配置
    search: {
        provider: 'local',
        options: {
            locales: {
                root: {
                    translations: {
                        button: {
                            buttonText: '搜索文档',
                            buttonAriaLabel: '搜索文档'
                        },
                        modal: {
                            noResultsText: '无法找到相关结果',
                            resetButtonTitle: '清除查询条件',
                            footer: {
                                selectText: '选择',
                                navigateText: '切换',
                                closeText: '关闭',
                            }
                        }
                    }
                }
            }
        }
    },
    // 404页面配置
    notFound: {
        title: "很抱歉，您访问的页面不存在！",
        quote: "请仔细检查您输入的网址是否正确。",
        linkText: "返回首页",
    },

    // 自定义扩展: 文章元数据配置
    // @ts-ignore
    articleMetadataConfig: {
        isEnable: true,
        author: '攀哥', // 文章全局默认作者名称
        authorLink: '/about/me', // 点击作者名时默认跳转的链接
        showViewCount: false, // 是否显示文章阅读数, 需要在 docs/.vitepress/theme/api/config.js 及 interface.js 配置好相应 API 接口
    },

    // 自定义扩张: 卡片容器
    cardContainerConfig: {
        // 是否显示卡片容器
        isEnable: true,
    },
    // 自定义链接卡片容器
    linkCardContainerConfig: {
        // 是否显示卡片容器
        isEnable: true,

        defaultTitle:"链接卡片"

        // defaultIcon: 'https://www.yangzupan.com/favicon.ico',
     
    },

    // 自定义扩展: 文章版权配置
    copyrightConfig: {
        // isEnable: true,
        license: '署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)',
        licenseLink: 'http://creativecommons.org/licenses/by-sa/4.0/'
    },

    // 自定义扩展: 页脚配置
    footerConfig: {
        // 是否显示页脚
        showFooter: true,
        // 现实版权信息
        showCopyright: true,
        author: '攀哥',
        // authorLink: '',
        // 建站日期
        StartYears: 2023,
        // showRecord: false,
        // ICP备案号
        icpRecordCode: '滇ICP备2021000000号',
        // 公安联网备案号
        publicSecurityRecordCode: '滇公网安备 5303810000000 号',
    }

    // 自定义配置：
}
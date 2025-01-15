import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-Hans',
    head: [['link', { rel: 'icon', href: '/logo.svg' }]],
    title: 'Python OpenBMCLAPI',
    description: 'OpenBMCLAPI 的 Python 版本',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/docs/getting-started/use-systemd', activeMatch: '/docs/' }
        ],

        sidebar: [
            {
                text: '快速开始',
                items: [
                    { text: '使用一键脚本（推荐）', link: '/docs/getting-started/use-systemd' },
                    {
                        text: '使用源码安装',
                        link: '/docs/getting-started/use-source-code'
                    },
                    {
                        text: '使用 Docker',
                        link: '/docs/getting-started/use-docker'
                    }
                ]
            }
        ],
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',

        logo: '/logo.svg',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/TTB-Network/python-openbmclapi-v2' }
        ]
    }
})

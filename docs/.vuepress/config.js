const { description } = require('../../package.json')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Vuepress Docs Boilerplate',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */


    base: "/blog/",
    ga: 'UA-70393520-1',
    evergreen: true,
    serviceWorker: true,
    locales: {
        '/zh/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器'
        },
        '/en/': {
            lang: 'en'
        },
        '/es/': {
            lang: 'es'
        }
    },
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        displayAllHeaders: true,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
            },

        },
        nav: [{
                text: '指南',
                link: '/zh/guide/',
            },
            {
                text: '版本管理',
                link: '/zh/git/'
            },
            {
                text: 'VuePress',
                link: 'https://v1.vuepress.vuejs.org'
            }
        ],
        sidebar: 'auto',
        // sidebar: {
        //     '/zh/guide/': [{
        //         title: '指南',
        //         collapsable: false,
        //         children: [
        //             '',
        //             'using-vue'
        //         ]
        //     }],
        //     '/zh/git/': [{
        //         title: "介绍",
        //         collapsable: false
        //     }, {
        //         title: "指令",
        //         collapsable: false,
        //         children: [
        //             'directive'
        //         ]

        //     }]
        // }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }
    ],
    /**
     * 配置热更新的文件
     */


}
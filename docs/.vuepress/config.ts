import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

const base = (process.env.BASE as "/" | `/${string}/`) || "/";

export default defineUserConfig({
    
    bundler: viteBundler(),
    locales: {
        "/": {
            lang: "zh-CN",
            title: "eReporting 专业检测报告设计器",
            description: "可视化低代码开发模式，解放传统枯燥的表单代码，提高效率，节省研发成本。",
        },
        "/en/": {
            lang: "en-US",
            title: "eReporting Professional Report Designer",
            description: "eReporting Professional Report Designer",
        },
    },
    port: 3000,
    base: '/DocHelp/',
    //base: base,
    shouldPrefetch: false,
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/DocHelp/favicon.png' }],
        ['meta', { name: 'application-name', content: 'IGeekFan' }],
        ['meta', { name: 'apple-mobile-web-app-title', content: 'IGeekFan' }],
        [
            'meta',
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        ],
        [
            'link',
            { rel: 'apple-touch-icon', href: `/apple-touch-icon.png` },
        ],
        ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css' }],
        [
            'script', {
                type: 'text/javascript',
                crossorigin: 'anonymous',
                src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7223766210897652'
            }
        ],
        [
            'script', {
                type: 'text/javascript',
                src: '/js/base.js'
            }
        ]
    ],
    theme,
    plugins: [
        docsearchPlugin({
            appId: "PIKEGX2V6X",
            apiKey: "249d0288a940c78dd9f7224054af745d",
            indexName: "igeekfan",
            locales: {
                "/zh/": {
                    placeholder: "搜索文档",
                    translations: {
                        button: {
                            buttonText: "搜索文档",
                            buttonAriaLabel: "搜索文档",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "清除查询条件",
                                resetButtonAriaLabel: "清除查询条件",
                                cancelButtonText: "取消",
                                cancelButtonAriaLabel: "取消",
                            },
                            startScreen: {
                                recentSearchesTitle: "搜索历史",
                                noRecentSearchesText: "没有搜索历史",
                                saveRecentSearchButtonTitle: "保存至搜索历史",
                                removeRecentSearchButtonTitle: "从搜索历史中移除",
                                favoriteSearchesTitle: "收藏",
                                removeFavoriteSearchButtonTitle: "从收藏中移除",
                            },
                            errorScreen: {
                                titleText: "无法获取结果",
                                helpText: "你可能需要检查你的网络连接",
                            },
                            footer: {
                                selectText: "选择",
                                navigateText: "切换",
                                closeText: "关闭",
                                searchByText: "搜索提供者",
                            },
                            noResultsScreen: {
                                noResultsText: "无法找到相关结果",
                                suggestedQueryText: "你可以尝试查询",
                                reportMissingResultsText: "你认为该查询应该有结果？",
                                reportMissingResultsLinkText: "点击反馈",
                            },
                        },
                    },
                },
            },
        }),
        googleAnalyticsPlugin({
            id: 'G-ZPF56S01D2'
        })
    ],
});

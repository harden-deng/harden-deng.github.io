import { hopeTheme } from "vuepress-theme-hope";
import { enNavbarConfig, zhNavbarConfig } from "./navbar";
import { zhSidebarConfig, enSidebarConfig } from "./sidebar";

export default hopeTheme({
    hostname: "https://www.irix.com.cn",
    logo: '/logo.png',
    // repo: 'infobase/eReporting-docs',
    // docsRepo: 'https://github.com/infobase/eReporting-docs',
    docsBranch: "main",
    docsDir: 'docs',
    iconPrefix: "iconfont icon-",
    locales: {
        "/": {
            navbar: zhNavbarConfig,
            sidebar: zhSidebarConfig,
            footer: "Copyright © 2025 INFOBASE",
            copyright: '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" data-v-c3cf170c="">沪ICP备2025155805号</a>',
            displayFooter: true,
            // metaLocales: {
            //     lastUpdated: "上次编辑于",
            //     // editLink: "",
            // },
            // 添加这行来禁用编辑链接
            editLink: false,
        },
        "/en/": {
            navbar: enNavbarConfig,
            sidebar: enSidebarConfig,
            footer: "Copyright © 2025 INFOBASE",
            copyright: '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" data-v-c3cf170c="">沪ICP备2025155805号</a>',
            displayFooter: true,
             // 添加这行来禁用编辑链接
             editLink: false,
        },
    },

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word"],
    encrypt: {

    },
    shouldPrefetch: false,
    plugins: {
        git: {
            createdTime: true,
            updatedTime: true,
            contributors: true,
        },
        pwa: true,
        feed: {
            atom: true,
            json: true,
            rss: true,
        },
        mdEnhance: {
            gfm: true,
            tabs: true,
            footnote: true,
            katex: true,
            flowchart: true,
        },
    },
});

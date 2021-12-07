const path = require("path");
module.exports = {
    title: '刘美玲',
    description: '刘美玲的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {rel: 'icon', href: '/logo.jpg'}], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', {rel: 'apple-touch-icon', href: '/logo.jpg'}], //PWA
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            {text: '首页', link: '/'},
            {text: '图虫', link: 'https://tuchong.com/16557320/'},
            {text: 'github', link: 'https://github.com/wujinsen/'}
        ],
        searchMaxSuggestions: 10,
        logo: '/logo.jpg',
        sidebar: [
            {
                title: '简介',
                collapsable: false,
                path: '/SUMMARY'
            },
            {
                title: '年份',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                children: [{
                    title: '2021年10月',
                    collapsable: false,
                    children: [
                        '/year/2021/2021-10/2021-10-31'
                    ]
                }, {
                    title: '2021年11月',
                    collapsable: false,
                    children: [
                        '/year/2021/2021-11/2021-11-15',
                        '/year/2021/2021-11/2021-11-23',
                        '/year/2021/2021-11/2021-11-27'
                    ]
                }, {
                        title: '2021年12月',
                        collapsable: false,
                        children: [
                            '/year/2021/2021-12/2021-12-04',
                            '/year/2021/2021-12/2021-12-05'
                        ]
                    }
                ]
            }
        ]
    }
};

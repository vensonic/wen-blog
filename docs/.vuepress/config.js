module.exports = {
    base: "/venson-notes/",
    title: "知识库文档",
    description: "一个前端狗的摘抄本本~",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            {
                text: "前端开发",
                items: [
                    {
                        text: "代码规范",
                        link: "/frontEnd/codeQuality/nameConventions",
                    },
                    {
                        text: "css",
                        link: "/frontEnd/css-docs/sass",
                    },
                ],
            },
            {
                text: "服务端",
                link: "/server/",
            },
            {
                text: "基本功",
                link: "/basic/",
            },
            {
                text: "开发工具",
                link: "/devTools/",
            },
        ],
        sidebar: {
            "/frontEnd/codeQuality/": [
                {
                    title: "代码规范",
                    children: [
                        "nameConventions",
                        "htmlConventions",
                        "cssConventions",
                        "javaScriptConventions",
                    ],
                },
            ],
        },
    },
};

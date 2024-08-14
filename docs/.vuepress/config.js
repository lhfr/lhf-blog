module.exports = {
  base: "/lhf-blog/",
  title: "LhfBlog",
  description: "lhf 的个人博客",
  // head: ["link", { rel: "icon", href: "/logo.png" }],
  markdown: {
    lineNumbers: false,
  },
  lastUpdated: "Last Updated",
  themeConfig: {
    logo: "/logo.png",
    // nav: [{ text: "开发经验", link: "/developExperience/reactActivation" }],
    sidebar: [
      {
        title: "经验总结",
        children: [
          {
            title: "react 保存上一级页面的状态",
            path: "/developExperience/reactActivation",
          },
          {
            title: "antd 拦截选择事件",
            path: "/developExperience/preventChange",
          },
          {
            title: "antd 选择事件前的回调",
            path: "/developExperience/onBeforeChange",
          },
          {
            title: "js 判断空对象",
            path: "/developExperience/isEmptyObject",
          },
          {
            title: "获取循环的子组件状态",
            path: "/developExperience/loopGetChildrenState",
          },
          {
            title: "antd 修改表格背景色",
            path: "/developExperience/rowClassName",
          },
          {
            title: "统一包装 antd 选择事件",
            path: "/developExperience/cloneElement",
          },
          {
            title: "限制 antd 日期选择范围",
            path: "/developExperience/disabledRangePicker",
          },
          {
            title: "antd 数字框大数处理",
            path: "/developExperience/bigNumberInput",
          },
        ],
      },
      {
        title: "技术方案",
        path: "https://lhfr.github.io/vite-project/",
      },
      {
        title: "高效组件",
        children: [
          {
            title: "CustomUI",
            path: "https://lhfr.github.io/CustomUI/",
          },
        ],
      },
    ],
  },
};

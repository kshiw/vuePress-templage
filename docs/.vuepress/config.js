module.exports = {
  title: '知识中心',
  description: '前端知识学习、分享',
  head: [
    ['link', { rel: 'shortcut icon', href: '/image/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
        { text: '指南', link: '/guide/' },
        { text: 'Github', link: 'https://github.com/stormzhangbx/vuePress-template' },
    ],
    sidebar: {
      // sidebar: [
      //   '/guide/',
      //   '/guide/vue',
      //   '/guide/eslint',
      // ],
      '/guide/': [
        ['', 'vue风格指南'],
        ['es6', 'es6特性'],
        ['eslint', 'eslint 规范']
      ]
    }
  }
}
const base = process.env.GH ? '/loading/' : '/'

module.exports = {
  title: '加载组件',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  dest: './docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'fe6/loading',
    editLinks: false,
    searchMaxSuggestions: 5,
    docsDir: 'loading',
    editLinkText: '帮助我们改善此页面！',
    sidebar: [
      '/',
      '/pc/zh-cn',
      '/wap/zh-cn',
    ]
  }
}

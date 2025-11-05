import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// 判断是否为生产环境
const isProd = process.env.NODE_ENV === 'production'

const base = process.env.VITEPRESS_BASE || (isProd ? '/xinyiblog/' : "/")

export default defineConfig({
  extends: blogTheme,
  // 默认为空字符串，支持部署到任意目录
  // 如需部署到子目录，可设置为 '/子目录名/'
  // 默认为根目录(/)，支持部署到任意目录
  // 如需部署到子目录，可设置为 '/子目录名/'
  //base: process.env.VITEPRESS_BASE || "/",
  base: base,
  lang: 'zh-cn',
  title: '新一的博客',
  description: '很高兴认识你',
  lastUpdated: true,
  head: [
    // 添加缓存控制 meta 标签
    ['meta', { name: 'cache-control', content: 'no-cache, no-store, must-revalidate' }],
    ['meta', { name: 'pragma', content: 'no-cache' }],
    ['meta', { name: 'expires', content: '0' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // 只在生产环境中启用 disable-devtool.js
    ...(isProd
      ? ([
        [
          'script',
          {
            'disable-devtool-auto': '',
            src: 'disable-devtool.js',
          },
        ],
      ] as any)
      : []),
  ],
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '目录'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about.html' }
    ],
  }
})

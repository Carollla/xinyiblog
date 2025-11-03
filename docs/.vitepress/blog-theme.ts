// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'


// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  oml2d: {
    mobileDisplay: true,
    models: [
      {
        path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json'
      }
    ]
  },
  footer: {
    copyright: '新一的博客',
  },

  // 主题色修改
  themeColor: 'el-blue',

  // 文章默认作者
  author: 'admin',

  // 友链
  friend: [
    {
      nickname: '模板市场',
      des: '',
      avatar: 'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vuejs-core.cn/store',
    },
    {
      nickname: '一键购买',
      des: '',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://api.vuejs-core.cn/pay/alipayPageRedirect?amount=9.99&title=blog-1',
    },
  ],

  // 公告
  // popover: {
  //   title: '公告',
  //   body: [
  //     {
  //       type: 'button',
  //       content: '加群交流',
  //       props: {
  //         type: 'success'
  //       },
  //       link: '',
  //     }

  //   ],
  //   duration: 0
  // },
})

export { blogTheme }

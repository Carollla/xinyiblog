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
  author: 'xy',

  // 友链
  friend: [
    {
      nickname: 'nanxer',
      des: '',
      avatar: 'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://nanxer.it4keth2ee.top/',
    },
    {
      nickname: 'st4r',
      des: '',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://st4r.it4keth2ee.top',
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

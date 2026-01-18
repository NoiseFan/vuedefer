import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VueDefer',
  description: 'Vue lazy render component with viewport-based mounting and update freezing.',

  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/getting-started' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              link: '/guide/getting-started',
            },
          ],
        },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/getting-started' },
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '指南',
              link: '/zh/guide/getting-started',
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    logo: '/logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alfred-Skyblue/vuedefer' },
    ],
  },
})

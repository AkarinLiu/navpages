import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '阿卡林刘的导航页',
  description: 'Just it Work.',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      '/', '/changelog.html', '/about.html',
      { text: 'GitHub', link: 'https://github.com/AkarinLiu/navbar' }
  ],
  }),

  bundler: viteBundler(),
})

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import { translate } from '@docusaurus/Translate'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Python OpenBMCLAPI',
  favicon: 'img/logo.svg',
  url: 'https://python-openbmclapi.ttb-network.top/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/TTB-Network/python-openbmclapi-site/tree/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/card.svg',
      navbar: {
        title: 'Python OpenBMCLAPI',
        logo: {
          alt: 'TTB-Network Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: '文档',
          },
          {
            type: 'docSidebar',
            sidebarId: 'api',
            position: 'left',
            label: 'API',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://translate.bugungu.top',
                label: '帮助我们翻译',
              },
            ],
          },
          {
            href: 'https://github.com/TTB-Network/python-openbmclapi',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '简介',
                to: '/docs',
              },
              {
                label: '快速上手',
                to: '/docs/getting-started/use-systemd'
              },
              {
                label: '配置文件',
                to: '/docs/advanced/configuration',
              },        
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/TTB-Network/python-openbmclapi-site',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                html: translate({ id: 'homepage.footer.more', message: `<span>由 <a href="https://vercel.com/"><img height="18" src="/img/vercel.svg" /></a> 强势驱动</span>
                     <span>使用 <a href="https://docusaurus.io/"><img height="25" src="/img/docusaurus.svg" /></a> 构建</span>` }),
              }, 
            ],
          },
        ],
        logo: {
          alt: 'Python OpenBMCLAPI Logo',
          src: 'img/logo-full.svg',
          href: 'https://github.com/TTB-Network/python-openbmclapi',
        },
        copyright: 
        `版权所有 © ${new Date().getFullYear()} TTB-Network。使用 <a href="https://docusaurus.io">Docusaurus</a> 构建。`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.okaidia,
        additionalLanguages: ['bash', 'diff', 'json', 'python', 'powershell', 'yaml', 'properties'],
      },
      algolia: {
        appId: '6DIHTRUAUN',
        apiKey: '2c04fb7d0d34e05dac607afa63c9bbd9',
        indexName: 'python-openbmclapi-site',
      },
    }),
};

export default config;

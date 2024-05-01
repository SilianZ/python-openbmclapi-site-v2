// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

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
                to: '/docs/introduction',
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
        ],
        copyright: 
        `版权所有 © ${new Date().getFullYear()} TTB-Network。
        使用 <a href="https://docusaurus.io">Docusaurus</a> 构建。
        除非另有声明，本网站内容采用<a href="https://creativecommons.org/licenses/by-sa/4.0/">知识共享署名-相同方式共享 4.0</a> 授权.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.okaidia,
        additionalLanguages: ['bash', 'diff', 'json', 'python', 'powershell', 'yaml', 'properties']
      },
      algolia: {
        appId: '6DIHTRUAUN',
        apiKey: '2c04fb7d0d34e05dac607afa63c9bbd9',
        indexName: 'python-openbmclapi-site',
      },
    }),
};

export default config;

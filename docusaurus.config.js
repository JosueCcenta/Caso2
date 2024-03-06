import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Facturalo Perú',
  tagline: 'Documentacion de instalacion de acuerdo al caso 02 ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://JosueCcenta.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Caso04',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JosueCcenta', // Usually your GitHub org/user name.
  projectName: 'Caso04', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Caso02',
        logo: {
          alt: 'Logo Darth Vader',
          src: 'img/Favicon.ico',
        },
        items: [
          {to: '/docs/intro', label: 'Documentacion', position: 'left'},
          {
            href: 'https://josueccenta.github.io/docusuarios-case1/',
            label: 'Caso01',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Github',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/JosueCcenta',
              },
            ],
          },
          {
            title: 'LinkedIn',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/josueccenta/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Documentacion FacturaloPeru, Construido con Docusaurus por Josue Ccenta .`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

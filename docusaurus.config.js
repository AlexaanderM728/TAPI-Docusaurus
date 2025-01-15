// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TAPI Documentation',
  tagline: 'Comprehensive API Documentation',
  favicon: 'img/favicon.ico',

  // Lokalny hosting (brak linków do zewnętrznego hostingu)
  url: 'http://localhost',
  baseUrl: '/',

  // Konfiguracja dotycząca przerwanych linków
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Ustawienia języka strony
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // Wyłącz blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // Dodane wtyczki
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          tapi: {
            specPath: 'api-docs/products.yaml', // Ścieżka do pliku OpenAPI
            outputDir: 'docs/api', // Katalog wyjściowy dla wygenerowanych plików
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TAPI Docs',
        logo: {
          alt: 'TAPI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [], // Brak danych kontaktowych ani dodatkowych linków
        copyright: `Copyright © ${new Date().getFullYear()} TAPI Documentation.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
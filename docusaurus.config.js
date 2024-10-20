// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Casdoor App",
  tagline: "A mobile app for iOS and Android providing multi-factor authentication with TOTP, built using React Native.",
  favicon: "img/favicon.png",

  url: "https://casdoorapp.github.io",
  baseUrl: "/",

  organizationName: "casdoor",
  projectName: "casdoorapp-website",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "ko", "ru", "fr", "de", "ja", "es", "pt", "uk", "th", "ar"],
  },

  presets: [
    [
      "classic",
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/casdoor/casdoor-app/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/casdoor/casdoorapp-website/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: "img/casdoor.png",
      navbar: {
        title: "Casdoor",
        logo: {
          alt: "Casdoor Logo",
          src: "img/casdoor.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {to: "/blog", label: "Blog", position: "left"},
          {to: "/help", label: "Help", position: "left"},
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsAfter: [
              {
                type: "html",
                value: "<hr style=\"margin: 0.3rem 0;\">",
              },
              {
                to: "https://crowdin.com/project/casdoorapp-website",
                label: "Help translate",
              },
            ],
          },
          {
            href: "https://github.com/casdoor/casdoor-app",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            type: "custom-community",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
          {
            type: "custom-casdoor",
            label: "Sign Up",
            src: "https://casdoor.com",
            position: "right",
            className: "casdoor-signup casdoor-link",
          },
          {
            type: "custom-casdoor",
            label: "Login",
            src: "https://casdoor.com",
            position: "right",
            className: "casdoor-login casdoor-link",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Casdoor",
            items: [
              {
                label: "Casdoor Server",
                to: "https://casdoor.org",
              },
              {
                label: "Casdoor App",
                to: "https://github.com/casdoor/casdoor-app",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/search?q=casdoor",
              },
              {
                label: "Discord",
                href: "https://discord.gg/5rPsrAzK7S",
              },
              {
                label: "QQ Group",
                href: "https://cdn.casdoor.com/casdoor/resource/built-in/admin/qq_casdoor.png",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/casdoor/casdoor-app",
              },
              {
                html: `
                <iframe src="https://ghbtns.com/github-btn.html?user=casdoor&repo=casdoor-app&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub">Casdoor App</iframe>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Casdoor contributors.`,
      },
      announcementBar: {
        id: "announcement", // ID of the announcement bar
        content:
        "<a target=\"_blank\" rel=\"noreferrer\" href=\"https://casbin.org/\">💖 Looking for an open-source and cross-platform authorization solution that supports ACL, RBAC, ABAC? Learn more about: Casbin</a>",
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "U9MEH3VSV1",
        apiKey: "9ef7ab8761a6480738185ecd6d1ecde7",
        indexName: "casdoor",
        contextualSearch: true,
      },
    }),
};

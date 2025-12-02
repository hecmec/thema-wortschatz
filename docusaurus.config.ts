import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import i18n from "./i18n.json";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const config: Config = {
  title: i18n.t("translation.title"),
  tagline: i18n.t("translation.tagline"),
  favicon: "img/favicon.ico",

  // Even if you don\'t use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "de"],
    localeConfigs: {
      fr: {
        label: "Français",
        htmlLang: "fr-FR",
      },
      de: {
        label: "Deutsch",
        htmlLang: "de-DE",
      },
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: i18n.t("translation.title"),
      logo: {
        alt: "Vocabulaire Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "englishSidebar",
          position: "left",
          label: i18n.t("navbar.link.Anglais"),
        },
        {
          type: "docSidebar",
          sidebarId: "chineseSidebar",
          position: "left",
          label: i18n.t("navbar.link.Chinois"),
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        // {
        //   type: 'external',
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: i18n.t("footer.link.title.vocabulaire"),
          items: [
            {
              label: i18n.t("footer.link.item.anglais"),
              to: "/english",
            },
            {
              label: i18n.t("footer.link.item.chinois"),
              to: "/chinese",
            },
          ],
        },
        {
          title: i18n.t("footer.link.title.ressources"),
          items: [
            {
              label: i18n.t("footer.link.item.youtube"),
              href: "https://www.youtube.com/@vocabulaire",
            },
            {
              label: i18n.t("footer.link.item.forvo"),
              href: "https://forvo.com/languages/fr/",
            },
          ],
        },
      ],
      copyright: i18n.t("footer.copyright"),
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

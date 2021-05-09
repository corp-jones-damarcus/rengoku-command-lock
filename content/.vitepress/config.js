// this is important as it's being used for listing blog articless
const { getPosts } = require('./getPosts');
/**
 * @type {import("vitepress").UserConfig<import("./theme/config").DefaultTheme.Config> }
 */
module.exports = {
  markdown: {
    anchor: { permalink: false },
    linkify: true,
    toc: { includeLevel: [1, 2, 3] },
  },
  title: 'Rengoku',
  description: 'A vitepress theme inspired by Flame Hashira Kyōjurō Rengoku.',
  customData: {
    posts: getPosts(),
  },

  themeConfig: {
    splitRow: true,
    nav: [
      {
        link: '/',
        text: 'Home',
      },
      {
        link: '/blog/docs.html',
        text: 'Docs',
      },
      {
        link: '/blog/index.html',
        text: 'Blog',
      },
    ],
  },
};

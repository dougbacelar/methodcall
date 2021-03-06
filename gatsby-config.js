const setupEnvironment = () => {
  const activeEnv =
    process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

  // eslint-disable-next-line no-console
  console.log(`Using environment config: '${activeEnv}'`);

  require('dotenv').config({
    path: `.env.${activeEnv}`,
  });
};

setupEnvironment();

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              aliases: {},
              classPrefix: 'language-',
              inlineCodeMarker: '±',
              noInlineHighlight: false,
              showLineNumbers: false,
            },
          },
        ],
      },
      resolve: 'gatsby-transformer-remark',
    },
    {
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        head: true,
        trackingId: process.env.GOOGLE_TRACKING_ID,
      },
      resolve: 'gatsby-plugin-google-analytics',
    },
    {
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
      resolve: 'gatsby-plugin-typography',
    },
  ],
  siteMetadata: {
    author: 'Doug Bacelar',
    description:
      'Personal blog about React, Javascript and software development.',
    disqusShortname: 'methodcall',
    siteUrl: 'https://methodcall.com',
    title: 'Method Call',
    twitter: '@doug_bacelar',
  },
};

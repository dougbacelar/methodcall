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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    { resolve: 'gatsby-transformer-remark' },
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
};

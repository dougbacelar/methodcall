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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    { resolve: 'gatsby-transformer-remark' },
  ],
};

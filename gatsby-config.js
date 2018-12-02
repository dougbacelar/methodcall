const setupEnvironment = () => {
  const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"

  console.log(`Using environment config: '${activeEnv}'`)
  
  require("dotenv").config({
    path: `.env.${activeEnv}`,
  })
};

setupEnvironment();

module.exports = {
    plugins: [
      {
        resolve: 'gatsby-source-hubspot',
        options: {
          key: process.env.HUBSPOT_API_KEY
        },
        filters: {
          state: 'PUBLISHED',
        }
      }
    ]
  };

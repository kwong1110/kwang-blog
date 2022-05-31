/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it

const path = require('path');

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        graphql: path.resolve(__dirname, 'src/graphql'),
        templates: path.resolve(__dirname, 'src/templates'),
        styles: path.resolve(__dirname, 'src/styles'),
      },
    },
  });
};

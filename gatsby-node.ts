/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it
import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';

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

// post pagination
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const postsPerPage = 2;

  // All Category
  const allResult = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  );
  if (allResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query. : [ allMdx ]`);
    return;
  }
  const allPosts = allResult.data.allMdx.edges;
  const allNumPages = Math.ceil(allPosts.length / postsPerPage);
  Array.from({ length: allNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/PostListTemplate.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: allNumPages,
        currentPage: i + 1,
      },
    });
  });

  // Each Category
  const result = await graphql(
    `
      {
        categoryList: allMdx(limit: 100) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
            nodes {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  );
  if (result.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query. : [ categoryList ]`,
    );
    return;
  }
  const categories = result.data.categoryList.group;

  const getCategoryURL = fieldValue => {
    return fieldValue.toLowerCase().replace(/[\s;]+/g, '-');
  };

  categories.forEach(category => {
    const numPages = Math.ceil(category.totalCount / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/blog/${getCategoryURL(category.fieldValue)}`
            : `/blog/${getCategoryURL(category.fieldValue)}/${i + 1}`,
        component: path.resolve('./src/templates/PostListTemplate.tsx'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          category: category.fieldValue,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

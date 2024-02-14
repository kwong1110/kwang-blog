import { useStaticQuery, graphql } from 'gatsby';

type getPostsProps = {};

export const getPosts = () => {
  const data = useStaticQuery<getPostsProps>(
    graphql`
      query {
        allNotion {
          edges {
            node {
              id
              databaseName
              title
              json
              createdAt
              updatedAt
            }
          }
        }
      }
    `,
  );
  return data;
};

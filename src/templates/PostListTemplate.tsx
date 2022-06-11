import CategoryList from 'components/blog/CategoryList';
import Pagination from 'components/blog/pagination/Pagination';
import { graphql } from 'gatsby';

type PostListTemplateProps = {
  data: {
    allMdx: {
      edges: {
        node: { frontmatter: IFrontMatter };
      }[];
    };
  };
  pageContext: IPaginstion;
};

const PostListTemplate = ({ data, pageContext }: PostListTemplateProps) => {
  const posts = data.allMdx.edges;
  return (
    <div>
      <CategoryList />
      <div>
        {posts.map((post, key) => (
          <div key={key}>
            <span>{post.node.frontmatter.category}</span>
            <span>{post.node.frontmatter.title}</span>
            <span>{post.node.frontmatter.date}</span>
            <span>{post.node.frontmatter.summary}</span>
          </div>
        ))}
      </div>
      <Pagination {...pageContext} />
    </div>
  );
};

export const postListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date
            category
            summary
            thumbnail
            title
          }
        }
      }
    }
  }
`;

export default PostListTemplate;

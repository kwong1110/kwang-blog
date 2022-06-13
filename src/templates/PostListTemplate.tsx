import CategoryList from 'components/blog/CategoryList';
import Pagination from 'components/blog/pagination/Pagination';
import { graphql, PageProps } from 'gatsby';

type PostListTemplateProps = {
  allMdx: {
    edges: {
      node: { frontmatter: IFrontMatter };
    }[];
  };
};

const PostListTemplate = ({
  data,
  pageContext,
}: PageProps<PostListTemplateProps, IPagination>) => {
  const posts = data.allMdx.edges;

  return (
    <div>
      <CategoryList pagePath={pageContext.pagePath} />
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
  query blogListQuery($skip: Int!, $limit: Int!, $category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
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

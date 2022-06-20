import CategoryList from 'components/blog/CategoryList';
import Pagination from 'components/blog/pagination/Pagination';
import SEO from 'components/common/SEO';
import { graphql, navigate, PageProps } from 'gatsby';
import { Fragment } from 'react';
import { toKebabCase } from 'utils/caseStyles';

type PostListTemplateProps = {
  allMdx: {
    edges: {
      node: { frontmatter: IFrontMatter; slug: string };
    }[];
  };
};

const PostListTemplate = ({
  data,
  pageContext,
}: PageProps<PostListTemplateProps, IPagination>) => {
  const posts = data.allMdx.edges;

  return (
    <Fragment>
      <SEO title="blog" />
      <div>
        <CategoryList pagePath={pageContext.pagePath} />
        <div>
          {posts.map((post, key) => {
            const { slug, frontmatter } = post.node;
            const { category, title, date, summary } = frontmatter;

            return (
              <div
                key={key}
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  navigate(`/blog/${toKebabCase(category)}/${slug}`)
                }
              >
                <span>{category}</span>
                <span>{title}</span>
                <span>{date}</span>
                <span>{summary}</span>
              </div>
            );
          })}
        </div>
        <Pagination {...pageContext} />
      </div>
    </Fragment>
  );
};

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!, $category: String) {
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
          slug
        }
      }
    }
  }
`;

export default PostListTemplate;

import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

type PostItemTemplateProps = {
  mdx: {
    //!TODO 목차 추가 시 수정 필요
    tableOfContents: any;
    body: string;
    timeToRead: number;
    frontmatter: IFrontMatter;
  };
};

const PostItemTemplate = ({
  data,
}: PageProps<PostItemTemplateProps, IPagination>) => {
  const { body, timeToRead, frontmatter } = data.mdx;

  return (
    <div>
      <div>제목 : {frontmatter.title}</div>
      <div>조회수 : {timeToRead}</div>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export const postItemQuery = graphql`
  query postItemQuery($slug: String) {
    mdx(slug: { eq: $slug }) {
      tableOfContents
      body
      timeToRead
      frontmatter {
        date
        category
        summary
        thumbnail
        title
      }
    }
  }
`;

export default PostItemTemplate;

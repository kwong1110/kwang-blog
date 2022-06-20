import SEO from 'components/common/SEO';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Fragment } from 'react';

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
    <Fragment>
      <SEO
        title={frontmatter.title}
        description={frontmatter.summary}
        image={frontmatter.thumbnail}
        keywords={frontmatter.tag.join(', ')}
      />
      <div>
        <div>제목 : {frontmatter.title}</div>
        <div>조회수 : {timeToRead}</div>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Fragment>
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
        tag
      }
    }
  }
`;

export default PostItemTemplate;

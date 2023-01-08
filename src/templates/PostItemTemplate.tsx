import SEO from 'components/common/SEO';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Fragment, useEffect } from 'react';

type PostItemTemplateProps = {
  mdx: {
    //!TODO 목차 추가 시 수정 필요
    tableOfContents: any;
    body: string;
    timeToRead: number;
    frontmatter: IFrontMatter;
  };
};

const COMMENTS_ID = 'comments-container';

const PostItemTemplate = ({
  data,
}: PageProps<PostItemTemplateProps, IPagination>) => {
  const { body, timeToRead, frontmatter } = data.mdx;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'kwong1110/kwang-blog-comments');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);

    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = '';
    };
  }, []);

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
      <div id={COMMENTS_ID} />
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

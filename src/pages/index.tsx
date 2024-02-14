import SEO from 'components/common/SEO';
import { getPosts } from 'graphql/getPosts';
import { Fragment } from 'react';

const IndexPage = () => {
  const data = getPosts();
  console.log('📢[index.tsx:7]: data: ', data);
  return (
    <Fragment>
      <SEO />
      <div>index입니다.</div>
    </Fragment>
  );
};

export default IndexPage;

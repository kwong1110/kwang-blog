// NOTE gatsby-ssr = gatsby-browser 일치 시키기
// 일반적으로 gatsby-ssr.js와 gatsby-browser.js에 동일한 구성 요소를 구현하여
// Node.js로 SSR을 통해 생성된 페이지가 브라우저에서 수화(hydration)된 후에도 동일하도록 해야 합니다.
//  - gatsby Docs

import React from 'react';
import Layout from './src/components/layout/Layout';
import GlobalStyle from './src/styles/GlobalStyle';
import 'prismjs/themes/prism-tomorrow.css';

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      <>{element}</>
    </>
  );
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

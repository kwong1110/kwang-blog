import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { layoutStyle } from './LayoutStyle';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <div css={layoutStyle}>
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;

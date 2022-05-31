import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

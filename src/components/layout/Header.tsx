import { GatsbyImage } from 'gatsby-plugin-image';
import { useLogo } from 'graphql/use-logo';
import React from 'react';

const Header = () => {
  const logo = useLogo();

  return (
    <div style={{ borderBottom: '1px solid black' }}>
      <GatsbyImage style={{ width: '90px' }} image={logo} alt="logo" />
      Header 영역
    </div>
  );
};

export default Header;

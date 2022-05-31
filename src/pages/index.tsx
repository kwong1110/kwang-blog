import { GatsbyImage } from 'gatsby-plugin-image';
import { useLogo } from 'graphql/use-logo';
import * as React from 'react';

const IndexPage = () => {
  const logo = useLogo();

  return (
    <div>
      <GatsbyImage image={logo} alt="logo" />
    </div>
  );
};

export default IndexPage;

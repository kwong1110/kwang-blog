import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { useLogo } from '../graphql/use-logo';

const IndexPage = () => {
  const logo = useLogo();

  return (
    <div>
      <GatsbyImage image={logo} alt="logo" />
    </div>
  );
};

export default IndexPage;

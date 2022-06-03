import { GatsbyImage } from 'gatsby-plugin-image';
import { useLogo } from 'graphql/use-logo';

const Header = () => {
  const logo = useLogo();

  return (
    <div style={{ borderBottom: '1px solid black' }}>
      <a href="/">
        <GatsbyImage style={{ width: '90px' }} image={logo} alt="logo" />
      </a>
      <a href="/about">about</a>
      <a href="/blog">blog</a>
    </div>
  );
};

export default Header;

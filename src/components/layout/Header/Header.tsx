import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useLogo } from 'graphql/use-logo';

const Header = () => {
  const logo = useLogo();

  return (
    <div style={{ borderBottom: '1px solid black' }}>
      <Link to="/">
        <GatsbyImage style={{ width: '90px' }} image={logo} alt="logo" />
      </Link>
      <Link to="/about" partiallyActive activeStyle={{ background: 'orange' }}>
        about
      </Link>
      <Link to="/blog" partiallyActive activeStyle={{ background: 'orange' }}>
        blog
      </Link>
    </div>
  );
};

export default Header;

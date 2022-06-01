import { footerStyle } from './FooterStyle';

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <div>
        <div>[Menu Link]</div>
        <div>Link Icon</div>
      </div>
      <div>KWANG Blog © 2022, Built with Gatsby</div>
    </footer>
  );
};

export default Footer;

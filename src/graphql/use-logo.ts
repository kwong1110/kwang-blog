import { useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type LogoProps = {
  logo: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

export const useLogo = () => {
  const { logo } = useStaticQuery<LogoProps>(
    graphql`
      query {
        logo: file(name: { eq: "logo" }) {
          childImageSharp {
            gatsbyImageData(width: 210)
          }
        }
      }
    `,
  );
  return logo.childImageSharp.gatsbyImageData;
};

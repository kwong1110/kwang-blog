import { useStaticQuery, graphql } from 'gatsby';

type SiteMetaDataProps = {
  site: {
    siteMetadata: ISiteMetaData;
  };
  file: {
    publicURL: string;
  };
};

export const useSiteMetaData = () => {
  const {
    site: { siteMetadata },
    file: { publicURL },
  } = useStaticQuery<SiteMetaDataProps>(
    graphql`
      query {
        site(siteMetadata: {}) {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
        file(name: { eq: "logo-thumbnail" }) {
          publicURL
        }
      }
    `,
  );
  return { siteMetadata, publicURL };
};

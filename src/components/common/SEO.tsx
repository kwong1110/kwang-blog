import { useSiteMetaData } from 'graphql/use-siteMetaData';
import { Helmet } from 'react-helmet';

type SEOProps = ISiteMetaData & {
  type?: 'website' | 'article';
  image?: string;
  url?: string;
  keywords?: string;
};

const SEO = ({ title, description, type, image, url, keywords }: SEOProps) => {
  const { siteMetadata, publicURL } = useSiteMetaData();

  const metadata = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: image || publicURL,
    type: type || 'website',
    keyword:
      keywords ||
      'react blog, gatsby, gatsby blog, frontend, 게츠비, 게츠비 블로그, 리엑트 블로그, 프론트엔드, 광 블로그, kwang blog',
    siteUrl: url || siteMetadata.siteUrl,
    author: siteMetadata.author,
  };

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={metadata.keyword} />
      <meta name="author" content={metadata.author} />
      <meta http-equiv="email" content="kwong1110@gmail.com" />
      <meta http-equiv="distribution" content="kwong1110" />
      <meta http-equiv="copyright" content={metadata.author} />
      //!TODO CSS 디자인 추가시 수정.
      <meta name="theme-color" content="#fdaf43"></meta>
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content={metadata.type} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <html lang="ko" />
    </Helmet>
  );
};

export default SEO;

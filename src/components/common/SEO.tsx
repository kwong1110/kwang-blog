import { Helmet } from 'react-helmet';

type SEOProps = {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  url?: string;
};

const SEO = ({ title, description, type, image, url }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Kwang Blog" />

      <html lang="ko" />
    </Helmet>
  );
};

export default SEO;

import Head from 'next/head';

const SEO = ({
  pageTitle,
  PageDescription,
}: {
  pageTitle: string;
  PageDescription: string;
}) => (
  <Head>
    <title>{pageTitle}</title>
    <meta name="description" content={PageDescription} />
  </Head>
);

export default SEO;

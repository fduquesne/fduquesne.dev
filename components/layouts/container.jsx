import Head from 'next/head';

import Header from './header';

const Container = ({ children, ...customMetadata }) => {
  const metadata = {
    title: 'Florian Duquesne',
    description: 'Front-end Javascript Developer, UI/UX enthusiast and futur course creator',
    ...customMetadata,
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <Header />

      <main className="max-w-2xl mx-auto">{children}</main>
    </>
  );
};

export default Container;

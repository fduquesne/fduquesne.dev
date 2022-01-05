import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head />

      <body className="px-8 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200 text-sm md:text-base transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

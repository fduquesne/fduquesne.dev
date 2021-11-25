import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head />

      <body className="px-10 bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 text-sm md:text-base transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import readingTime from 'reading-time';

import { getAllPosts, getPostData } from '@/lib/blog';

import Container from '@/components/layouts/container';
import Section from '@/components/ui/section';
import ViewCounter from '@/components/blog/view-counter';

const PostDetailPage = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const customComponents = {
    h2: heading => <h2 className="pt-8 pb-3 text-2xl md:text-3xl font-semibold">{heading.children}</h2>,
    h3: heading => <h3 className="pt-8 pb-3 text-xl md:text-2xl font-semibold">{heading.children}</h3>,
    p: paragraph => <p className="py-3">{paragraph.children}</p>,
    a: link => (
      <a className="text-indigo-400 hover:underline cursor-pointer" href={link.href} target="_blank" rel="noreferrer">
        {link.children}
      </a>
    ),
    ul: list => <ul className="pl-10 list-disc">{list.children}</ul>,
    ol: list => <ol className="pl-10 list-decimal">{list.children}</ol>,
    li: item => (
      <li className="pl-2 mb-3 text-gray-500">
        <div className="text-gray-900 dark:text-gray-200">{item.children}</div>
      </li>
    ),
    pre: pre => (
      <pre className="p-3 border border-gray-300 rounded-md text-gray-500 dark:border-gray-700 dark:text-gray-400">
        {pre.children[0].props.children[0]}
      </pre>
    ),
    code: code => <code className="px-2 border border-gray-300 rounded">{code.children}</code>,
    blockquote: blockquote => (
      <blockquote className="pl-5 border-l-2 border-gray-300 text-gray-500 dark:border-gray-700 dark:text-gray-400 italic">
        {blockquote.children}
      </blockquote>
    ),
  };

  return (
    <Container title={`Florian Duquesne - ${post.title}`} description={post.excerpt}>
      <Section>
        <h1 className="mb-3 text-3xl md:text-4xl font-bold">{post.title}</h1>

        <div className="flex flex-col sm:flex-row items-center mb-6 text-sm text-gray-700 dark:text-gray-400">
          <div className="flex-1 pb-1 sm:pb-0">
            Published on {formattedDate} &nbsp;&nbsp;&bull;&nbsp;&nbsp; ??? {post.readingTime}
          </div>

          <ViewCounter slug={post.slug} />
        </div>

        <Image
          src={`/images/blog/${post.slug}.png`}
          alt={post.title}
          width={675}
          height={250}
          className="rounded-lg object-cover"
        />

        <article className="mt-6 leading-7">
          <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
        </article>
      </Section>
    </Container>
  );
};

export const getStaticPaths = () => {
  return {
    paths: getAllPosts().map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const post = getPostData(params.slug);
  return { props: { post: { ...post, readingTime: readingTime(post.content).text } } };
};

export default PostDetailPage;

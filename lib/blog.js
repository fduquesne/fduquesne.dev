import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirPath = path.join(process.cwd(), 'data', 'blog');

const mostPopularPosts = [
  'why-i-created-my-portfolio',
  'key-features-of-nextjs',
  'all-kind-of-tests-in-continuous-integration',
];
const featuredPosts = ['why-i-created-my-portfolio', 'key-features-of-nextjs', 'the-importance-of-code-review'];

const getPostData = postIdentifier => {
  const slug = postIdentifier.replace(/.mdx$/, '');
  const filePath = path.join(blogDirPath, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return { slug, content, ...data };
};

export const getMostPopularPosts = () => {
  return mostPopularPosts.map(getPostData);
};

export const getFeaturedPosts = () => {
  return featuredPosts.map(getPostData);
};

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

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(blogDirPath);
  const posts = fileNames.map(getPostData);
  return posts.sort((pA, pB) => (pA.date > pB.date ? -1 : 1));
};

export const getMostPopularPosts = () => mostPopularPosts.map(getPostData);
export const getFeaturedPosts = () => featuredPosts.map(getPostData);

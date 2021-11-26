import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirPath = path.resolve(process.cwd(), 'data', 'blog');

export const getPostData = postIdentifier => {
  const slug = postIdentifier.replace(/.mdx$/, '');
  const filePath = path.join(blogDirPath, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return { slug, content, ...data };
};

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(blogDirPath).filter(el => path.extname(el) === '.mdx');
  const posts = fileNames.map(getPostData);
  return posts.sort((pA, pB) => (pA.date > pB.date ? -1 : 1));
};

export const getMostPopularPosts = () => getAllPosts().filter(post => post.isMostPopular);
export const getFeaturedPosts = () => getAllPosts().filter(post => post.isFeatured);

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirPath = path.join(process.cwd(), 'data', 'blog');

const getPostData = postIdentifier => {
  const slug = postIdentifier.replace(/.mdx$/, '');
  const filePath = path.join(blogDirPath, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return { slug, content, ...data };
};

export const getFeaturedPosts = () => {
  return ['why-i-created-my-portfolio', 'key-features-of-nextjs', 'the-importance-of-code-review'].map(getPostData);
};

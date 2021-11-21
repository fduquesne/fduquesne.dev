import { getAllPosts, getMostPopularPosts } from '@/lib/blog';

import Container from '@/components/layouts/container';
import Section from '@/components/ui/section';
import PostCard from '@/components/blog/post-card';
import PostItem from '@/components/blog/post-item';
import { IconSearch } from '@/components/icons';

const BlogPage = ({ allPosts, mostPopularPosts }) => {
  return (
    <Container title="Florian Duquesne - Blog" description="Blog posts about programming and new techs.">
      <Section>
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="pt-3 pb-5 text-gray-400">
          Welcome to my blog. Here you will find some posts about programming and new techs. Use the search below to
          filter by title and/or excerpt.
        </p>
        <div className="flex items-center px-4 rounded-lg bg-gray-800">
          <input
            type="text"
            placeholder="Search posts by its title and/or description"
            className="flex-1 pr-4 py-2 bg-transparent placeholder-gray-500 outline-none"
          />
          <IconSearch width={20} height={20} />
        </div>
      </Section>

      <Section title="Most Popular Posts">
        <div className="grid grid-cols-3 gap-6">
          {mostPopularPosts.map(post => (
            <PostCard key={post.slug} slug={post.slug} title={post.title} />
          ))}
        </div>
      </Section>

      <Section title="All Posts">
        {allPosts.map(post => (
          <PostItem key={post.slug} slug={post.slug} title={post.title} excerpt={post.excerpt} />
        ))}
      </Section>
    </Container>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      allPosts: getAllPosts(),
      mostPopularPosts: getMostPopularPosts(),
    },
  };
};

export default BlogPage;

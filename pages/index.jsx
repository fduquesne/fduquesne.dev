import Image from 'next/image';

import { getFeaturedPosts } from '@/lib/blog';

import { IconDownload, IconGithub, IconMail, IconPin } from '@/components/icons';
import Container from '@/components/layouts/container';
import Section from '@/components/ui/section';
import PostCard from '@/components/blog/post-card';
import ViewMore from '@/components/ui/view-more';
import GithubCard from '@/components/github/github-card';
import AboutCard from '@/components/homepage/about-card';

const HomePage = ({ featuredPosts }) => {
  return (
    <Container>
      <Section>
        <div className="flex items-center mb-10">
          <div className="flex-1 pr-10">
            <h1 className="text-4xl font-bold">Florian Duquesne</h1>
            <p className="pt-3 pb-5 text-gray-400">
              Front-end Javascript Developer, UI/UX enthusiast and futur course creator
            </p>
            <button className="flex items-center px-5 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-all">
              <div className="pr-3">Download CV</div>
              <IconDownload />
            </button>
          </div>

          <Image
            src="/images/site/profile.png"
            alt="Profile Picture"
            width={170}
            height={170}
            className="rounded-full filter grayscale"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <AboutCard icon={<IconPin />} text="Lille, France" />
          <AboutCard icon={<IconMail />} text="fduquesne@icloud.com" />
        </div>
      </Section>

      <Section title="Featured Posts">
        <div className="grid grid-cols-3 gap-6">
          {featuredPosts.map(post => (
            <PostCard key={post.slug} slug={post.slug} title={post.title} gradient />
          ))}
        </div>

        <div className="mt-6">
          <ViewMore href="/blog" text="Read more posts" />
        </div>
      </Section>

      <Section title="Works">
        <div className="grid grid-cols-2 gap-6">
          <GithubCard
            id="fduquesne.dev"
            title="fduquesne.dev"
            description="✨ My portfolio built with Next.js, Tailwind CSS, Prisma and Vercel"
          />
          <GithubCard
            id="noted-react"
            title="noted-react"
            description="📒 Note-taking app built with React.js and Redux"
          />
          <GithubCard id="sandbox" title="sandbox" description="👨‍💻 Train some languages / frameworks" />
        </div>

        <div className="mt-6">
          <ViewMore href="https://github.com/fduquesne?tab=repositories" text="View more works" />
        </div>
      </Section>
    </Container>
  );
};

export const getStaticProps = () => {
  return { props: { featuredPosts: getFeaturedPosts() } };
};

export default HomePage;

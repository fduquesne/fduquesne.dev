import Image from 'next/image';
import Link from 'next/link';

import { getFeaturedPosts } from '@/lib/blog';

import { IconDownload, IconGithub, IconMail, IconPin } from '@/components/icons';
import Container from '@/components/layouts/container';
import Section from '@/components/ui/section';
import PostCard from '@/components/blog/post-card';
import ViewMore from '@/components/ui/view-more';
import GithubCard from '@/components/github/github-card';
import AboutCard from '@/components/homepage/about-card';
import DefaultPostCard from '@/components/blog/default-post-card';

const HomePage = ({ featuredPosts }) => {
  return (
    <Container>
      <Section>
        <div className="flex flex-col-reverse sm:flex-row items-center mb-10">
          <div className="flex-1 sm:pr-10">
            <h1 className="text-3xl md:text-4xl text-center sm:text-left font-bold">Florian Duquesne</h1>
            <p className="pt-3 pb-5 text-gray-700 dark:text-gray-400 text-center sm:text-left">
              Front-end Javascript Developer, UI/UX enthusiast and futur course creator
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link href="/assets/cv-florian-duquesne.pdf">
                <a
                  target="_blank"
                  className="flex items-center px-5 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-gray-200 transition-all"
                >
                  <div className="pr-3">Download CV</div>
                  <IconDownload />
                </a>
              </Link>
            </div>
          </div>

          <div className="w-28 sm:w-32 md:w-44 pb-7 sm:pb-0">
            <Image
              src="/images/site/profile.png"
              alt="Profile Picture"
              width={170}
              height={170}
              className="rounded-full filter grayscale "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <AboutCard icon={<IconPin />} text="Lille, France" />
          <AboutCard icon={<IconMail />} text="fduquesne@icloud.com" />
        </div>
      </Section>

      <Section title="Works">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GithubCard
            slug="fduquesne.dev"
            description="✨ My portfolio built with Next.js, Tailwind CSS, Prisma and Vercel"
          />
          <GithubCard slug="noted-react" description="📒 Note-taking app built with React.js and Redux" />
          <GithubCard slug="sandbox" title="sandbox" description="👨‍💻 Train some languages / frameworks" />
        </div>

        <div className="mt-6">
          <ViewMore href="https://github.com/fduquesne?tab=repositories" text="View more works" />
        </div>
      </Section>

      <Section title="Featured Posts">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map(post => (
            <PostCard key={post.slug} slug={post.slug} title={post.title} gradient />
          ))}

          <DefaultPostCard />
          <DefaultPostCard />
        </div>

        <div className="mt-6">
          <ViewMore href="/blog" text="Read more posts" />
        </div>
      </Section>
    </Container>
  );
};

export const getStaticProps = () => {
  return { props: { featuredPosts: getFeaturedPosts() } };
};

export default HomePage;

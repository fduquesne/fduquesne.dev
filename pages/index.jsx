import Image from 'next/image';

import { IconDownload } from '@/components/icons';
import Container from '@/components/layouts/container';
import Section from '@/components/ui/section';
import PostCard from '@/components/blog/post-card';
import ViewMore from '@/components/ui/view-more';

const HomePage = () => {
  return (
    <Container>
      <Section>
        <div className="flex items-center">
          <div className="flex-1 pr-10">
            <h1 className="text-4xl font-bold">Florian Duquesne</h1>
            <p className="text-gray-400 pt-3 pb-5">
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
      </Section>

      <Section title="Featured Posts">
        <div className="grid grid-cols-3 gap-6">
          <PostCard
            slug="why-i-created-my-portfolio"
            title="Why I created my portfolio"
            gradient="from-indigo-300 to-indigo-400"
          />
          <PostCard
            slug="the-importance-of-code-review"
            title="The importance of code review"
            gradient="from-indigo-300 to-indigo-400"
          />
          <PostCard
            slug="all-kind-of-tests-in-continuous-integration"
            title="All kind of tests in Continuous Integration"
            gradient="from-indigo-300 to-indigo-400"
          />
        </div>

        <div className="mt-6">
          <ViewMore href="/blog" text="Read more posts" />
        </div>
      </Section>
    </Container>
  );
};

export default HomePage;

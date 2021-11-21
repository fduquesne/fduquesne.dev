import Image from 'next/image';

import { IconDownload } from '@/components/icons';
import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';

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
            <button className="flex items-center px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all">
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
    </Container>
  );
};

export default HomePage;

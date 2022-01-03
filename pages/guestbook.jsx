import Container from '@/components/layouts/container';
import Section from '@/components/ui/section';

const HomePage = () => {
  return (
    <Container title="Florian Duquesne - Guestbook" description="Feel free to leave a message.">
      <Section>
        <h1 className="text-3xl md:text-4xl font-bold">Guestbook</h1>
        <p className="pt-3 pb-5 text-gray-700 dark:text-gray-400">
          Feel free to leave me a message about what you want : appreciation, techs, design - Yay 🎉
        </p>
      </Section>
    </Container>
  );
};

export default HomePage;

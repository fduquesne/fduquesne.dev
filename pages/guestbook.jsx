import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

import Container from '@/components/layouts/container';
import Section from '@/components/ui/section';
import Message from '@/components/guestbook/message';

const HomePage = () => {
  const { data } = useSWR('/api/guestbook', fetcher);

  return (
    <Container title="Florian Duquesne - Guestbook" description="Feel free to leave a message.">
      <Section>
        <h1 className="text-3xl md:text-4xl font-bold">Guestbook</h1>
        <p className="pt-3 pb-5 text-gray-700 dark:text-gray-400">
          Feel free to leave me a message about what you want : appreciation, techs, design - Yay 🎉
        </p>
      </Section>

      <Section>
        {data === undefined ? (
          <p className="text-gray-400 italic">Loading...</p>
        ) : data.messages.length === 0 ? (
          <p className="text-gray-400">No message yet...</p>
        ) : (
          data.messages.map(message => <Message key={message.id} message={message} />)
        )}
      </Section>
    </Container>
  );
};

export default HomePage;

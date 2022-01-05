import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

import Container from '@/components/layouts/container';
import Section from '@/components/ui/section';
import Message from '@/components/guestbook/message';

const HomePage = () => {
  const { data } = useSWR('/api/guestbook', fetcher);

  const nicknameInputRef = useRef();
  const textInputRef = useRef();

  const [sendingMessage, setSendingMessage] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => setMessages(data?.messages), [data]);

  const sendMessage = async e => {
    e.preventDefault();

    setSendingMessage(true);

    const nickname = nicknameInputRef.current.value.trim();
    const text = textInputRef.current.value.trim();

    const res = await fetch('/api/guestbook', {
      method: 'POST',
      body: JSON.stringify({ nickname, text }),
      headers: { 'Content-Type': 'application/json' },
    });
    const message = await res.json();

    setMessages([message, ...messages]);
    setSendingMessage(false);

    nicknameInputRef.current.value = '';
    textInputRef.current.value = '';
  };

  return (
    <Container title="Florian Duquesne - Guestbook" description="Feel free to leave a message.">
      <Section>
        <h1 className="text-3xl md:text-4xl font-bold">Guestbook</h1>
        <p className="pt-3 pb-5 text-gray-700 dark:text-gray-400">
          Feel free to leave me a message about what you want : appreciation, techs, design - Yay 🎉
        </p>

        <form className="p-4 rounded-lg bg-indigo-900 bg-opacity-30" onSubmit={sendMessage}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="nickname">
              Nickname
            </label>
            <input
              className="w-full h-10 px-4 rounded"
              type="text"
              id="nickname"
              name="nickname"
              ref={nicknameInputRef}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="text">
              Message
            </label>
            <textarea className="w-full p-4 rounded resize-none" id="text" ref={textInputRef} required></textarea>
          </div>
          <button
            className="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white transition-all"
            type="submit"
            disabled={sendingMessage}
          >
            Send
          </button>
        </form>
      </Section>

      <Section>
        {messages === undefined ? (
          <p className="text-gray-700 dark:text-gray-400 italic">Loading...</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-400 italic">No message yet. Be the first to send a message. 📨</p>
        ) : (
          messages.map(message => <Message key={message.id} message={message} />)
        )}
      </Section>
    </Container>
  );
};

export default HomePage;

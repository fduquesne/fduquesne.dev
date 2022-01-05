import prisma from '@/lib/prisma';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const messages = await prisma.guestbook.findMany({ orderBy: { timestamp: 'desc' } });
    return res.status(200).json({ messages });
  }

  if (req.method === 'POST') {
    const { nickname, text } = req.body;
    const message = { nickname, text, timestamp: Date.now() };

    const newMessage = await prisma.guestbook.create({ data: message });

    return res.status(201).json(newMessage);
  }

  return res.status(405).send('Method not allowed');
};

export default handler;

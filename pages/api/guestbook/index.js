import prisma from '@/lib/prisma';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const messages = await prisma.guestbook.findMany({ orderBy: { timestamp: 'desc' } });
    return res.status(200).json({ messages });
  }

  return res.status(405).send('Method not allowed');
};

export default handler;

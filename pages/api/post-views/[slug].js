import prisma from '@/lib/prisma';

const handler = async (req, res) => {
  const { slug } = req.query;

  if (req.method === 'POST') {
    await prisma.views.upsert({
      where: { slug },
      create: { slug, total: 1 },
      update: { total: { increment: 1 } },
    });

    return res.status(201).send('Number of views incremented.');
  }

  if (req.method === 'GET') {
    const { total } = (await prisma.views.findUnique({ where: { slug } })) || {};
    return res.status(200).json({ views: total || 0 });
  }

  return res.status(405).json({ message: 'Method not allowed' });
};

export default handler;

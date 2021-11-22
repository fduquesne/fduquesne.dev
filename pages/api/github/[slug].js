const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { slug } = req.query;
    const repoRes = await fetch(`https://api.github.com/repos/fduquesne/${slug}`);
    const { language, stargazers_count, forks_count } = await repoRes.json();

    return res.status(200).json({ language, starsCount: stargazers_count, forksCount: forks_count });
  }

  return res.status(405).send('Method not allowed');
};

export default handler;

import useSWR from 'swr';
import { useEffect } from 'react';

import fetcher from '@/lib/fetcher';

const ViewCounter = ({ slug }) => {
  const { data } = useSWR(`/api/post-views/${slug}`, fetcher);
  const views = data?.views;

  useEffect(() => {
    fetch(`/api/post-views/${slug}`, { method: 'POST' });
  }, [slug]);

  return <div>{views ? new Intl.NumberFormat('en-EN').format(views) : '---'} views</div>;
};

export default ViewCounter;

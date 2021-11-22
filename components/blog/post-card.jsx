import useSWR from 'swr';
import Link from 'next/link';

import fetcher from '@/lib/fetcher';

import { IconEye } from '../icons';

const PostCard = ({ slug, title, gradient }) => {
  const { data } = useSWR(`/api/post-views/${slug}`, fetcher);
  const views = data?.views;

  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={`h-56 p-1 rounded-xl ${gradient ? 'bg-gradient-to-r from-indigo-300 to-indigo-400' : 'bg-gray-800'}`}
      >
        <div className={`flex flex-col h-full p-4 rounded-lg ${gradient && 'bg-gray-900'}`}>
          <h3 className="flex-1 text-xl font-semibold">{title}</h3>

          <div className="flex items-center">
            <IconEye width={20} height={20} />
            <span className="pt-0.5 pl-2 text-sm">{views || '---'}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;

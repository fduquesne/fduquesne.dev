import useSWR from 'swr';
import Link from 'next/link';

import fetcher from '@/lib/fetcher';

import { IconCode, IconFork, IconStar } from '../icons';

const GithubCard = ({ slug, description, wip }) => {
  const { data } = useSWR(`/api/github/${slug}`, fetcher);
  const language = data?.language;
  const starsCount = data?.starsCount;
  const forksCount = data?.forksCount;

  return (
    <Link href={`https://github.com/fduquesne/${slug}`}>
      <a target="_blank">
        <div className="relative flex flex-col h-full p-4 border border-gray-400 dark:border-gray-800 hover:border-gray-700 dark:hover:border-gray-700 rounded-lg transition-all">
          {wip && (
            <div className="absolute -top-2 right-4 flex items-center h-5 px-2 rounded-md bg-indigo-500 text-xs">
              WIP
            </div>
          )}

          <div className="flex-1">
            <h4 className="pb-2 font-semibold">{slug}</h4>
            <p className="pb-4">{description}</p>
          </div>

          <div className="flex text-xs">
            <div className="flex items-center mr-6">
              <IconCode width={18} height={18} />
              <span className="ml-2">{language || '---'}</span>
            </div>
            <div className="flex items-center mr-6">
              <IconStar width={18} height={18} />
              <span className="ml-2">{starsCount || '---'}</span>
            </div>
            <div className="flex items-center">
              <IconFork width={18} height={18} />
              <span className="ml-2">{forksCount || '---'}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default GithubCard;

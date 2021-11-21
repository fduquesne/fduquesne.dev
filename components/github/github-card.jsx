import Link from 'next/link';

import { IconCode, IconFork, IconStar } from '../icons';

const GithubCard = ({ id, title, description }) => {
  return (
    <Link href={`https://github.com/fduquesne/${id}`}>
      <a target="_blank">
        <div className="flex flex-col h-full p-4 border border-gray-800 rounded-lg hover:border-gray-700 transition-all">
          <div className="flex-1">
            <h4 className="pb-2 font-semibold">{title}</h4>
            <p className="pb-4">{description}</p>
          </div>

          <div className="flex">
            <div className="flex items-center mr-6">
              <IconCode width={18} height={18} />
              <span className="ml-2">---</span>
            </div>
            <div className="flex items-center mr-6">
              <IconStar width={18} height={18} />
              <span className="ml-2">---</span>
            </div>
            <div className="flex items-center">
              <IconFork width={18} height={18} />
              <span className="ml-2">---</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default GithubCard;

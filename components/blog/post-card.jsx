import Link from 'next/link';

import { IconEye } from '../icons';

const PostCard = ({ slug, title, gradient }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className={`h-52 p-1 rounded-xl ${gradient ? `bg-gradient-to-r ${gradient}` : 'bg-gray-800'}`}>
        <div className={`flex flex-col h-full p-4 rounded-lg ${gradient && 'bg-gray-900'}`}>
          <h3 className="flex-1 text-xl font-semibold">{title}</h3>

          <div className="flex items-center">
            <IconEye />
            <span className="pl-2">---</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;

import Link from 'next/link';

import { IconArrowRight } from '../icons';

const ViewMore = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className="flex items-center text-gray-400 hover:text-gray-200 transition-all">
        <span className="mr-2">{text}</span>
        <IconArrowRight />
      </a>
    </Link>
  );
};

export default ViewMore;

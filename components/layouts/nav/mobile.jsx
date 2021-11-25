import { useState } from 'react';
import Link from 'next/link';
import { IconClose, IconMenu } from '@/components/icons';

const NavItem = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className="block w-full py-5 border-b border-gray-400 hover:border-gray-500 dark:border-gray-800 dark:hover:border-gray-700 font-semibold transition-all">
        {text}
      </a>
    </Link>
  );
};

const NavMobile = ({ items }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="block md:hidden">
      <button
        className="p-1.5 border-2 border-transparent rounded-lg bg-gray-200 hover:border-gray-400 dark:bg-gray-900 dark:hover:border-gray-500 transition-all"
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? <IconClose /> : <IconMenu />}
      </button>

      <div
        className={`fixed top-28 right-0 bottom-0 left-0 bg-gray-200 dark:bg-gray-900 transition-all ${
          showNav ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <div className="px-10">
          {items.map(item => (
            <NavItem key={item.text} href={item.href} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMobile;

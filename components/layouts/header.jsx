import Link from 'next/link';
import { useRouter } from 'next/router';

import { IconSun } from '../icons';

const NavItem = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`px-3 pt-3 pb-2 rounded-lg hover:bg-gray-800 ${
          isActive ? 'text-gray-200 font-semibold' : 'text-gray-400 font-normal'
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="flex items-center max-w-2xl mx-auto pt-8 pb-20">
      <div className="font-semibold mr-10">fduquesne.dev</div>

      <nav className="flex-1">
        <NavItem href="/" text="Home" />
        <NavItem href="/blog" text="Blog" />
      </nav>

      <button className="p-1.5 border-2 border-transparent rounded-lg bg-gray-700 hover:border-gray-500 transition-all">
        <IconSun />
      </button>
    </header>
  );
};

export default Header;

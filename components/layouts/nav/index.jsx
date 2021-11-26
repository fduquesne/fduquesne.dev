import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`px-3 pt-3 pb-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800 text-sm transition-all ${
          isActive ? 'dark:text-gray-200 font-semibold' : 'dark:text-gray-400 font-normal'
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

const Nav = ({ items }) => {
  return (
    <nav className="hidden md:block">
      {items.map(item => (
        <NavItem key={item.text} href={item.href} text={item.text} />
      ))}
    </nav>
  );
};

export default Nav;

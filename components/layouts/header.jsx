import { useTheme } from 'next-themes';

import Nav from './nav';
import NavMobile from './nav/mobile';
import { IconMoon, IconSun } from '../icons';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleThemeHandler = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const navItems = [
    { href: '/', text: 'Home' },
    { href: '/blog', text: 'Blog' },
    // { href: '/guestbook', text: 'Guestbook' },
  ];

  return (
    <header className="flex items-center max-w-2xl mx-auto pt-8 pb-20">
      <div className="hidden md:block font-semibold mr-10">fduquesne.dev</div>

      <div className="flex-1">
        <Nav items={navItems} />
        <NavMobile items={navItems} />
      </div>

      <button
        className="p-1.5 border-2 border-transparent rounded-lg bg-gray-300 hover:border-gray-400 dark:bg-gray-700 dark:hover:border-gray-500 transition-all"
        onClick={toggleThemeHandler}
      >
        {theme === 'light' ? <IconMoon /> : <IconSun />}
      </button>
    </header>
  );
};

export default Header;

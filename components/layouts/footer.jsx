import Link from 'next/link';

import { IconGithub, IconLinkedin } from '../icons';

const Footer = () => {
  return (
    <footer className="max-w-2xl mx-auto py-10 border-t border-gray-400 dark:border-gray-800 text-center text-gray-700 dark:text-gray-400">
      <p>© 2021 Florian Duquesne. All Rights Reserved. - Made with 💜 by Florian Duquesne</p>

      <div className="flex justify-center mt-5">
        <Link href="https://github.com/fduquesne">
          <a
            className="p-3 mr-4 border bg-gray-300 hover:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:bg-gray-800 rounded-full transition-all"
            target="_blank"
          >
            <IconGithub />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/fduquesne">
          <a
            className="p-3 border bg-gray-300 hover:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:bg-gray-800 rounded-full transition-all"
            target="_blank"
          >
            <IconLinkedin />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

// Component for the header of the pages
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="block text-teal-600 dark:text-teal-300">
              <span className="sr-only">Home</span>
              <Image src="/clapper_board.svg" alt="Logo" width={40} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Global" className="hidden md:flex items-center gap-6 text-sm ml-auto">
            <ul className="flex items-center gap-6">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white
                  dark:hover:text-white/75" href="#">About</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white
                  dark:hover:text-white/75" href="#">Services</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white
                  dark:hover:text-white/75" href="#">Projects</a>
              </li>
            </ul>
          </nav>

          {/* Avatar Section */}
          <div className="hidden md:block ml-6">
            <button
              type="button"
              className="flex items-center overflow-hidden rounded-full border border-gray-300 
                shadow-inner dark:border-gray-600">
              <span className="sr-only">Toggle dashboard menu</span>
              <Link href="https://github.com/ArthurSobreira" passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/avatar.png" alt="Avatar" width={40} height={40} className="object-cover" 
                  />
                </a>
              </Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center text-gray-500 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav aria-label="Global" className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white 
                  dark:hover:text-white/75" href="#">About</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white 
                  dark:hover:text-white/75" href="#">Services</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white 
                  dark:hover:text-white/75" href="#">Projects</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

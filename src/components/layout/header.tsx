import { css, cx } from '@emotion/css';
import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useIsomorphicLayoutEffect as useLayoutEffect } from 'react-power-ups';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
    if (!localStorage.theme) {
      localStorage.theme = 'dark';
      document.documentElement.classList.toggle('dark', true);
    }

    if (localStorage.theme === 'dark') setDarkMode(true);
  }, []);

  return (
    <header id="_header">
      <div id="_header-inner">
        <Link href="/" className="-ml-px inline-flex flex-col items-end">
          <Image
            src="/images/logo.png"
            width={500 * 0.48}
            height={500 * 0.48}
            quality={30}
            alt="logo"
            className={cx(
              'h-auto w-20 lg:w-[140px]',
              css`
                margin-top: -20px;
              `,
            )}
          />
        </Link>

        <div className="flex items-center gap-1 self-center">
          <label
            htmlFor="darkmode-toggle"
            className="relative ml-2 inline-flex cursor-pointer items-center text-2xl"
            title="Toggle dark mode"
          >
            <input
              type="checkbox"
              id="darkmode-toggle"
              className="sr-only"
              checked={darkMode}
              onChange={({ target }) => {
                setDarkMode(target.checked);
                localStorage.theme = target.checked ? 'dark' : 'light';
                document.documentElement.classList.toggle('dark', target.checked);
              }}
            />
            <div className="bg-elm-electric h-7 w-11 rounded-full transition-colors dark:bg-slate-500" />
            <div className="absolute left-0 top-0 m-0.5 h-6 w-6 rounded-full bg-white transition-[left] dark:left-4" />
            <HiSun className="absolute top-0 left-0 m-0.5 opacity-100 transition-all dark:left-4 dark:opacity-0" />
            <HiMoon className="absolute top-0 left-0 m-0.5 opacity-0 transition-all dark:left-4 dark:text-typography-light dark:opacity-100" />
          </label>
          <Head>
            <meta
              name="theme-color"
              content={darkMode ? '#25303f' : '#ffffff'}
              key="meta:theme-color"
            />
          </Head>
        </div>
      </div>
    </header>
  );
}

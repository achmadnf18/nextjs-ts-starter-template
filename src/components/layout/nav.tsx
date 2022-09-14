import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  HiOutlineArchive,
  HiOutlineInformationCircle,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineX,
} from 'react-icons/hi';
import { useToggle } from 'react-power-ups';

export default function Nav() {
  const [menuExpanded, toggleExpand] = useToggle();
  const { asPath } = useRouter();
  useEffect(() => {
    toggleExpand(false);
  }, [asPath, toggleExpand]);

  return (
    <nav id="_nav">
      <ul id="_nav-inner">
        <li className="order-2 flex-1">
          <Link href="/" className="nav-link">
            <HiOutlineViewGrid className="text-2xl" />
            Dashboard
          </Link>
        </li>
        <li className="order-2 flex-1">
          <Link href="/my-collections" className="nav-link">
            <HiOutlineArchive className="text-2xl" />
            My Collections
          </Link>
        </li>
        <li className="order-2 flex-1 md:hidden">
          <button
            type="button"
            className={clsx('nav-link', menuExpanded && 'text-rose-500')}
            onClick={toggleExpand}
          >
            {menuExpanded ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
            {menuExpanded ? 'Hide Menu' : 'All Menu'}
          </button>
        </li>
        <li className={clsx('order-1 flex-1 md:order-2 md:block', !menuExpanded && 'hidden')}>
          <Link href="/about" className="nav-link">
            <HiOutlineInformationCircle className="text-2xl" />
            About
          </Link>
        </li>
        <li className={clsx('order-1 w-full md:hidden', !menuExpanded && 'hidden')} />
      </ul>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathName = usePathname();

  const navItems = [
    { label: 'Home', icon: '🏠', route: '/' },
    { label: 'Notes', icon: '📓', route: '/notes' },
    { label: 'Coffee', icon: '☕', route: '/coffee' },
    { label: 'Settings', icon: '⚙️', route: '/settings' },
  ];

  return (
    <nav className="bg-gray-800 fixed bottom-0 w-full flex justify-around py-2">
      {navItems.map((item) => (
        <Link key={item.route} href={item.route}>
          <button
            className={`flex flex-col items-center ${
              pathName === item.route ? 'text-white' : 'text-gray-400'
            } hover:text-white`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                pathName === item.route ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
            </div>
            <span className="text-sm mt-1">{item.label}</span>
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;

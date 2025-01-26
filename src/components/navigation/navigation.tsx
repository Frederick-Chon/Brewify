'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Coffee, Settings, LucideIcon } from 'lucide-react';

type NavItem = {
  label: string;
  icon: LucideIcon;
  route: string;
};

const navItems: NavItem[] = [
  { label: 'Home', icon: Home, route: '/' },
  { label: 'Notes', icon: BookOpen, route: '/notes' },
  { label: 'Coffee', icon: Coffee, route: '/coffee' },
  { label: 'Settings', icon: Settings, route: '/settings' },
];

const Navigation: React.FC = () => {
  const pathName = usePathname();

  return (
    <nav className="mx-auto max-w-screen-sm px-2 bg-zinc-950 fixed bottom-0 w-full flex justify-around py-3 inset-x-0">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathName === item.route;

        return (
          <Link key={item.route} href={item.route}>
            <button
              className={`flex flex-col items-center ${
                isActive ? 'text-yellow-500' : 'text-gray-400'
              } hover:text-white transition-colors duration-200`}
            >
              <Icon
                size={24}
                className={`mb-1 transition-transform duration-200 ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
              />
              <span className="text-xs">{item.label}</span>
            </button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;

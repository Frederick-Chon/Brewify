'use client';

import { usePathname } from 'next/navigation';
import Header from './header';
import pageHeaders from '@/config/page-headers';

const getGreeting = (): string => {
  const hour = new Date().getHours();
  return hour < 12
    ? 'Good morning'
    : hour < 17
    ? 'Good afternoon'
    : 'Good evening';
};

const HeaderWrapper = () => {
  const pathName = usePathname();
  const userName = 'Fred';

  const headerKey = pathName === '/' ? 'home' : pathName.slice(1);
  const { title, subtitle } = pageHeaders[headerKey] || {
    title: 'Brewify',
    subtitle: 'Level up your coffee game!',
  };

  const greeting = pathName === '/' ? `${getGreeting()}, ${userName}!` : title;

  return <Header title={greeting} subtitle={subtitle} />;
};

export default HeaderWrapper;

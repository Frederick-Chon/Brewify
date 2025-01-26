import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import HeaderWrapper from '@/components/header/header-wrapper';
import Navigation from '@/components/navigation/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Brewify',
  description: 'Level up your coffee game!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderWrapper />
        <main className="bg-zinc-950">
          <div className="mx-auto max-w-screen-sm bg-zinc-950 px-5">
            {children}
          </div>
        </main>
        <Navigation />
      </body>
    </html>
  );
}

import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from './components/ClientLayout';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kairos Ventures - Building Tomorrow\'s Innovations Today',
  description: 'Kairos Ventures is a startup house investing in early-stage companies, transforming innovative ideas into market-leading businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
} 
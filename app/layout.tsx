import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '../components/ThemeRegistry';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'ITCentral | Building northern tech founders',
  description: 'Hands-on IT training, software solutions, events, and technology insights from ITCentral.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeRegistry>
      </body>
    </html>
  );
}
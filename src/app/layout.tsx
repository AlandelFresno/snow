import { Sofia_Sans } from 'next/font/google';
import Header from '@/components/header/header';
import './globals.scss';

const sofia = Sofia_Sans({
  subsets: ['latin'],
  variable: '--font-sofia',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={sofia.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

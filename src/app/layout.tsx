import type { Metadata, Viewport } from 'next';
import { Sofia_Sans } from 'next/font/google';
import Header from '@/components/header/header';
import './globals.scss';

const sofia = Sofia_Sans({
  subsets: ['latin'],
  variable: '--font-sofia',
  display: 'swap',
});

const SITE_URL = 'https://snow.com.ar';
const SITE_NAME = 'Snow';
const SITE_DESC =
  'Servicios técnicos especializados: aires acondicionados, grupos generadores y centrales telefónicas. 30+ años de experiencia en Argentina.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Servicios técnicos especializados`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: [
    'aires acondicionados',
    'mantenimiento aires acondicionados',
    'grupos generadores',
    'centrales telefónicas',
    'TDM',
    'IP',
    'servicios técnicos',
    'Argentina',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Servicios técnicos especializados`,
    description: SITE_DESC,
    images: [
      {
        url: '/assets/images/snow/snow_isologo_version_positivo_png.png',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Servicios técnicos especializados`,
    description: SITE_DESC,
    images: ['/assets/images/snow/snow_isologo_version_positivo_png.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/assets/images/snow/icon.svg',
    shortcut: '/assets/images/snow/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#08152e',
  width: 'device-width',
  initialScale: 1,
};

// JSON-LD LocalBusiness schema. TODO papá: completar address, phone, openingHours reales.
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESC,
  image: `${SITE_URL}/assets/images/snow/snow_isologo_version_positivo_png.png`,
  logo: `${SITE_URL}/assets/images/snow/snow_isologo_version_positivo_png.png`,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AR',
  },
  areaServed: { '@type': 'Country', name: 'Argentina' },
  knowsAbout: [
    'Aires acondicionados',
    'Grupos generadores',
    'Centrales telefónicas',
    'Mantenimiento industrial',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios técnicos',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Aires Acondicionados',
          description: 'Mantenimiento, reparación e instalación de equipos de climatización.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Grupos Generadores',
          description: 'Mantenimiento, reparación e instalación de grupos electrógenos diesel.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Centrales Telefónicas',
          description: 'Mantenimiento de centrales TDM e IP empresariales.',
        },
      },
    ],
  },
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}

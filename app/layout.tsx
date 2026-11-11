import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gioda954.github.io'),
  title: 'Giovanni Dal Lago',
  description: 'Electrical engineer working on robotic hands, tactile sensing, and manipulation. Based in California.',
  alternates: { canonical: './' },
  openGraph: {
    title: 'Giovanni Dal Lago',
    description: 'Electrical engineer. Robotics, tactile sensing, and manipulation.',
    type: 'website',
    url: 'https://gioda954.github.io',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Giovanni Dal Lago · Electrical engineer' }],
  },
  twitter: { card: 'summary_large_image', title: 'Giovanni Dal Lago', description: 'Electrical engineer. Robotics, tactile sensing, and manipulation.', images: ['/og.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

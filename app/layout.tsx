import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://gioda954.github.io'),
  title: 'Giovanni Dal Lago — Robotics, Touch & Electronics',
  description: 'I build the electronics that let robots move, feel, and get a grip on the real world. Giovanni Dal Lago — engineer, builder, Italian in California.',
  openGraph: { title: 'Giovanni Dal Lago', description: 'Making robots a little more human. Robotics, tactile sensing, manipulation & electronics.', images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Giovanni Dal Lago — Making robots a little more human.' }], type: 'website', url: 'https://gioda954.github.io', },
  twitter: { card: 'summary_large_image', title: 'Giovanni Dal Lago', description: 'Making robots a little more human.', images: ['/og.png'] },
  robots: { index: true, follow: true },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }

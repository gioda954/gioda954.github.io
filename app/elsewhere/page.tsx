import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

export const metadata: Metadata = {
  alternates: { canonical: '/elsewhere/' },
  title: 'Outside work · Giovanni Dal Lago',
  description: 'Astreo, a charity wine project with friends from the Morosini Naval School in Venice.',
  openGraph: { title: 'Outside work · Giovanni Dal Lago', description: 'Astreo, a charity wine project with friends from the Morosini Naval School in Venice.', url: '/elsewhere/', images: [{ url: '/astreo.jpg', alt: 'The piano donated through Astreo' }] },
  twitter: { title: 'Outside work · Giovanni Dal Lago', description: 'Astreo, a charity wine project with friends from the Morosini Naval School in Venice.', images: ['/astreo.jpg'] },
};

export default function Elsewhere() {
  return <>
    <Navigation current="elsewhere" />
    <main id="content" className="page">
      <h1>Outside work</h1>
      <section>
        <h2 className="first-heading">Astreo</h2>
        <p>In 2024, a group of us from the Morosini Naval School in Venice started <a href="https://astreo.org" target="_blank" rel="noopener noreferrer">Astreo</a>. We made a wine together, following it from the harvest to the label, and used the proceeds to give something back to our school.</p>
        <p>The first edition funded a grand piano for the students’ music room.</p>
        <figure className="portrait">
          <Image src="/astreo.jpg" alt="The grand piano donated to the Morosini Naval School through Astreo" width={2880} height={5120} sizes="(max-width: 740px) 85vw, 340px" />
          <figcaption>The piano at Morosini.</figcaption>
        </figure>
        <p>For the second edition, we’re raising funds for a library at a girls’ orphanage in India, in collaboration with Anna4Children.</p>
        <p><a href="https://astreo.org" target="_blank" rel="noopener noreferrer">More about Astreo</a></p>
      </section>
    </main>
    <Footer />
  </>;
}

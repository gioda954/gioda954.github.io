import Link from 'next/link';
import Navigation from './components/navigation';
import Footer from './components/footer';

export default function Home() {
  return <>
    <Navigation current="about" />
    <main id="content" className="page about">
      <h1>About</h1>
      <p>I’m an electrical engineer working on robotic hands at Foundation Robotics in San Francisco. My work is in electronics, tactile sensing, and manipulation. I also do research on touch and hand tracking with UC Berkeley’s Khanna Lab.</p>
      <p>I studied Engineering Physics at Politecnico di Milano and Electrical Engineering at Cal Poly, where I completed my master’s with summa cum laude.</p>
      <p>I’m interested in how robots interact with the physical world, especially what they can learn through touch. I enjoy working across sensing, electronics, and control, and building the hardware to try things out.</p>
      <p>Outside engineering, I’m part of <Link href="/elsewhere/">Astreo</Link>, a charity wine project started with friends from the Morosini Naval School in Venice.</p>
      <p className="home-links"><Link href="/work/">Selected work</Link><span aria-hidden="true">·</span><a href="mailto:gdallago@calpoly.edu">Get in touch</a></p>
    </main>
    <Footer />
  </>;
}

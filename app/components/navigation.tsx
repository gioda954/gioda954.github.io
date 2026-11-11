import Link from 'next/link';

export default function Navigation({ current }: { current: 'about' | 'work' | 'elsewhere' }) {
  return <>
    <a className="skip" href="#content">Skip to content</a>
    <header className="site-header">
      <Link className="name" href="/">Giovanni Dal Lago</Link>
      <nav aria-label="Main navigation">
        <Link href="/" aria-current={current === 'about' ? 'page' : undefined}>About</Link>
        <Link href="/work/" aria-current={current === 'work' ? 'page' : undefined}>Work</Link>
        <Link href="/elsewhere/" aria-current={current === 'elsewhere' ? 'page' : undefined}>Outside work</Link>
      </nav>
    </header>
  </>;
}

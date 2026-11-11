'use client';

import { useState } from 'react';

const projects = [
  { n: '01', title: 'A hand that knows when to stop.', category: 'ROBOTIC HAND · PERSONAL PROJECT', text: 'A tendon-driven hand. Custom electronics. A grasp that responds to pressure.', href: 'https://github.com/gioda954/Robotics_hand', kind: 'hand' },
  { n: '02', title: 'From seeing to picking.', category: 'ROBOTIC MANIPULATION · PERSONAL PROJECT', text: 'Teaching a robot to find an object, reach for it, and put it where it belongs.', href: 'https://github.com/gioda954/Vision_based_manipulator', kind: 'vision' },
];

export default function Home() {
  const [pressed, setPressed] = useState(false);
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header><a className="wordmark" href="#">gdl<span>✳</span></a><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#human">Off the bench</a><a href="mailto:gdallago@calpoly.edu" className="nav-contact">Say ciao ↗</a></nav></header>
    <main id="main">
      <section className="hero">
        <div className="hero-top"><span className="eyebrow"><i /> Giovanni Dal Lago</span><span className="eyebrow location">Italian roots. California chapter.</span></div>
        <h1>Making robots<br/>a little more <em>human.</em><span className="asterisk" aria-hidden="true">✳</span></h1>
        <div className="hero-bottom"><p>I build the electronics that let robots move,<br className="desktop"/> feel, and get a grip on the real world.</p><a className="round-link" href="#work" aria-label="Explore my work">↓</a><span className="hero-note">ENGINEER. BUILDER.<br/>STILL ASKING WHY.</span></div>
        <div className="hero-strip"><span>ROBOTICS</span><b>＋</b><span>TACTILE SENSING</span><b>＋</b><span>MANIPULATION</span><b>＋</b><span>ELECTRONICS</span></div>
      </section>
      <section className="intro section" id="about"><span className="eyebrow index">01 / THE SHORT VERSION</span><div><h2>From a physics question<br/>to something you can hold.</h2><p>Physics got me started. Building things made me stay. These days, I work on robotic hands at Foundation Robotics and research touch for manipulation with UC Berkeley’s Khanna Lab.</p><p>I like being close to the hardware. Sketch it, build it, test it. Then figure out what I missed.</p><div className="credentials"><span>Cal Poly <small>M.S. Electrical Engineering · Summa Cum Laude</small></span><span>Politecnico di Milano <small>B.Sc. Engineering Physics</small></span></div></div></section>
      <section className="section work" id="work"><div className="section-heading"><div><span className="eyebrow index">02 / AT THE WORKBENCH</span><h2>Touch. Move. Repeat.</h2></div><a className="text-link" href="https://github.com/gioda954" target="_blank" rel="noopener noreferrer">My GitHub ↗</a></div>
        <div className="focus-grid"><article><span className="focus-icon" aria-hidden="true">✳</span><h3>A sense of touch.</h3><p>Tactile sensing that helps robots understand what’s in their hands.</p></article><article><span className="focus-icon" aria-hidden="true">↗</span><h3>Built to move.</h3><p>Electronics, embedded systems, and control for robotic manipulation.</p></article><article><span className="focus-icon" aria-hidden="true">⌁</span><h3>Ideas into hardware.</h3><p>From the first circuit to a working prototype on the bench.</p></article></div>
        <div className="project-grid">{projects.map(p=><a className="project" key={p.n} href={p.href} target="_blank" rel="noopener noreferrer"><div className={`project-art ${p.kind}`}>{p.kind==='hand'?<div className="grip-art" aria-hidden="true"><div className="grip-finger f1"/><div className="grip-finger f2"/><div className="grip-finger f3"/><div className="grip-palm"/><div className="grip-object"/></div>:<img src="/robot.png" alt="My vision-based robotic manipulator on the workbench" loading="lazy"/>}<span className="project-no">{p.n} / PERSONAL BUILD</span><span className="art-arrow" aria-hidden="true">↗</span>{p.kind==='hand'&&<span className="art-caption">GRASP / RELEASE / LEARN<br/>CONCEPTUAL SKETCH</span>}</div><div className="project-copy"><span className="eyebrow">{p.category}</span><h3>{p.title}</h3><p>{p.text}</p></div></a>)}</div>
        <div className="physics-note"><span className="physics-star" aria-hidden="true">↗</span><p><strong>A physics detour worth taking.</strong> National physics competition winner. Represented Italy at the International Physicists’ Tournament, with a team finish of 7th worldwide.</p><span className="eyebrow">ITALIAN TEAM / 2025</span></div>
      </section>
      <section className="human section" id="human"><div className="section-heading"><div><span className="eyebrow index">03 / OFF THE BENCH</span><h2>There’s a person<br/>behind the soldering iron.</h2></div><span className="handwritten">ciao, that’s me ↙</span></div>
        <div className="personal-grid"><a className="astreo-card" href="https://astreo.org" target="_blank" rel="noopener noreferrer"><div className="astreo-photo"><img src="/astreo.jpg" alt="The grand piano donated through Astreo to the Morosini Naval School" loading="lazy"/><span>GOOD WINE. SOMETHING GOOD.</span></div><div className="personal-copy"><span className="eyebrow">ASTREO / GIVING BACK</span><h3>A bottle. A piano.<br/>A next chapter.</h3><p>With fellow Morosini alumni, I’m part of Astreo: wine with a purpose. Our first edition funded a grand piano for the school. The next supports a library for girls in India, with Anna4Children.</p><span className="text-link">Meet Astreo ↗</span></div></a>
        <div className="music-card"><div className={`record ${pressed?'spinning':''}`} aria-hidden="true"><div className="record-label">gdl<br/><small>SIDE B</small></div></div><div className="personal-copy"><span className="eyebrow">THE SOUNDTRACK</span><h3>Usually, there’s<br/>music on.</h3><p>A little corner for what’s on repeat.<br/>The listening diary is coming soon.</p><button className="text-link record-button" onClick={()=>setPressed(!pressed)} aria-pressed={pressed}>{pressed?'Pause the record Ⅱ':'Give it a spin ↗'}</button><small className="music-caption">JUST A LITTLE SPIN. NO AUDIO.</small></div></div></div>
      </section>
      <section className="contact section" id="contact"><span className="eyebrow">04 / YOUR TURN</span><h2>Building something<br/><em>that should exist?</em></h2><a className="contact-link" href="mailto:gdallago@calpoly.edu">Let’s talk. <span>↗</span></a><div className="contact-footer"><span>Robots, research, or a good idea.<br/>My inbox is open.</span><a href="mailto:gdallago@calpoly.edu">gdallago@calpoly.edu</a></div></section>
    </main><footer><span>© {new Date().getFullYear()} Giovanni Dal Lago</span><span>From Italy, with curiosity.</span><a href="#">Back to top ↑</a></footer>
  </>;
}

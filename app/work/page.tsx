import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import YouTubeVideo from '../components/youtube-video';

export const metadata: Metadata = {
  alternates: { canonical: '/work/' },
  title: 'Work · Giovanni Dal Lago',
  description: 'Electronics, tactile sensing, and robotic manipulation. Research and selected projects by Giovanni Dal Lago.',
  openGraph: { title: 'Work · Giovanni Dal Lago', description: 'Electronics, tactile sensing, and robotic manipulation.', url: '/work/', images: [{ url: '/media/hand-tactile-demo.jpg', width: 1600, height: 900, alt: 'Robotic hand prototype showing tactile sensing' }] },
  twitter: { title: 'Work · Giovanni Dal Lago', description: 'Electronics, tactile sensing, and robotic manipulation.', images: ['/media/hand-tactile-demo.jpg'] },
};

export default function Work() {
  return <>
    <Navigation current="work" />
    <main id="content" className="page">
      <h1>Work</h1>
      <p>My focus is robotic hands: the electronics that drive them, the sensors that give them a sense of touch, and the control that brings the two together.</p>
      <section>
        <h2>Foundation Robotics <span className="when">2026–present</span></h2>
        <p>Electrical engineer on the hands team, working on electronics and tactile sensing for humanoid robotic hands.</p>
        <div className="hand-videos">
          <figure>
            <YouTubeVideo id="Nhr7ZnFZYkA" title="Testing Our New Robotic Hand — Foundation Robotics" />
            <figcaption>Our hand in testing. <a href="https://www.youtube.com/watch?v=Nhr7ZnFZYkA" target="_blank" rel="noopener noreferrer">Foundation Robotics, on YouTube</a>.</figcaption>
          </figure>
          <figure className="hand-short">
            <video controls playsInline preload="none" poster="/media/foundation-hand.jpg" width={720} height={960} aria-label="Foundation robotic hand moving its fingers on a test bench">
              <source src="https://video.twimg.com/amplify_video/2093174836550041604/vid/avc1/720x960/e9h8kqQhDG2Xw_a2.mp4?tag=29" type="video/mp4" />
              <a href="https://x.com/andreaesposito/status/2093174852010262606">Watch the hand demo on X</a>
            </video>
            <figcaption>A bench test. <a href="https://x.com/andreaesposito/status/2093174852010262606" target="_blank" rel="noopener noreferrer">Video by Andrea Esposito</a>.</figcaption>
          </figure>
        </div>
        <p className="media-note">Another public test: <a href="https://x.com/andreaesposito/status/2083661422643560604" target="_blank" rel="noopener noreferrer">catching baseballs</a>.</p>
      </section>
      <section id="tactile-sensing">
        <h2>Tactile sensing</h2>
        <p>Touch on a robotic hand, visualized in real time. This is a development prototype, not the final version used on the robot.</p>
        <figure>
          <video controls playsInline preload="none" poster="/media/hand-tactile-demo.jpg" width={1600} height={900} aria-label="Development hand prototype: contact on the hand and fingers appears on the tactile visualization">
            <source src="/media/hand-tactile-demo.mp4" type="video/mp4" />
            <a href="/media/hand-tactile-demo.mp4">Watch the hand tactile sensing prototype</a>
          </video>
          <figcaption>Development prototype, not the final robot hardware.</figcaption>
        </figure>
        <details className="earlier-demo">
          <summary>Earlier sensor experiment</summary>
          <p>A small, early-stage sensor prototype I built.</p>
          <figure>
            <video controls playsInline preload="none" poster="/media/tactile-prototype.jpg" width={1200} height={480} aria-label="Early tactile sensor prototype: touching the sensor produces a response on the live heatmap">
              <source src="/media/tactile-prototype.mp4" type="video/mp4" />
              <a href="/media/tactile-prototype.mp4">Watch the early tactile sensor demonstration</a>
            </video>
            <figcaption>Early prototype. Contact on the right; live response on the left.</figcaption>
          </figure>
        </details>
      </section>
      <section>
        <h2>UC Berkeley, Khanna Lab</h2>
        <p>Master’s thesis research on tactile sensing and hand tracking for robotic manipulation data collection.</p>
      </section>
      <section>
        <h2>Earlier work</h2>
        <p>At Politecnico di Milano, I worked on motor control and power electronics for an efficient electric vehicle. With the PhysisPEB student team, I designed electronics for a hydrogen-powered boat that competed at the Monaco Energy Boat Challenge.</p>
      </section>
      <section id="projects" className="projects">
        <h2>Selected projects</h2>
        <h3><a href="https://github.com/gioda954/Robotics_hand" target="_blank" rel="noopener noreferrer">Robotic hand</a></h3>
        <p>A tendon-driven hand with custom electronics, motor control, and pressure feedback for grasping. A personal project exploring how contact sensing can guide a grasp.</p>
        <figure>
          <YouTubeVideo id="hA0uSn5qXlU" title="Robotics Hand Demo — Giovanni Dal Lago" />
          <figcaption>An earlier hand project, from my time at school. <a href="https://www.youtube.com/watch?v=hA0uSn5qXlU" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</figcaption>
        </figure>
        <h3><a href="https://github.com/gioda954/Vision_based_manipulator" target="_blank" rel="noopener noreferrer">Vision-based manipulation</a></h3>
        <p>A pick-and-place system combining object detection, pose estimation, and robot control.</p>
        <figure>
          <Image src="/robot.png" alt="The vision-based manipulation project: a robot arm and camera on a workbench" width={1524} height={602} sizes="(max-width: 740px) 90vw, 640px" />
          <figcaption>My vision-based manipulation project. <a href="https://youtu.be/cT57q7G10-s" target="_blank" rel="noopener noreferrer">Watch the demo</a>.</figcaption>
        </figure>
      </section>
      <section>
        <h2 id="physics">Physics</h2>
        <p>In 2025, my team won the Italian national physics competition and represented Italy at the International Physicists’ Tournament, finishing seventh worldwide.</p>
        <figure className="competition-logo">
          <a href="https://ipt.science/" target="_blank" rel="noopener noreferrer">
            <Image src="/media/ipt-logo.png" alt="International Physicists’ Tournament logo" width={700} height={700} sizes="220px" />
          </a>
          <figcaption><a href="https://ipt.science/" target="_blank" rel="noopener noreferrer">International Physicists’ Tournament</a></figcaption>
        </figure>
      </section>
    </main>
    <Footer />
  </>;
}

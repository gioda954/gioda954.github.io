import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

export const metadata: Metadata = {
  alternates: { canonical: '/work/' },
  title: 'Work · Giovanni Dal Lago',
  description: 'Electronics, tactile sensing, and robotic manipulation. Research and selected projects by Giovanni Dal Lago.',
  openGraph: { title: 'Work · Giovanni Dal Lago', description: 'Electronics, tactile sensing, and robotic manipulation.', url: '/work/', images: [{ url: '/robot.png', width: 1524, height: 602, alt: 'Vision-based manipulation project' }] },
  twitter: { title: 'Work · Giovanni Dal Lago', description: 'Electronics, tactile sensing, and robotic manipulation.', images: ['/robot.png'] },
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
        <h3><a href="https://github.com/gioda954/Vision_based_manipulator" target="_blank" rel="noopener noreferrer">Vision-based manipulation</a></h3>
        <p>A pick-and-place system combining object detection, pose estimation, and robot control.</p>
        <figure>
          <Image src="/robot.png" alt="The vision-based manipulation project: a robot arm and camera on a workbench" width={1524} height={602} sizes="(max-width: 740px) 90vw, 640px" />
          <figcaption>My vision-based manipulation project. <a href="https://youtu.be/cT57q7G10-s" target="_blank" rel="noopener noreferrer">Watch the demo</a>.</figcaption>
        </figure>
      </section>
      <section>
        <h2>Physics</h2>
        <p>In 2025, my team won the Italian national physics competition and represented Italy at the International Physicists’ Tournament, finishing seventh worldwide.</p>
      </section>
    </main>
    <Footer />
  </>;
}

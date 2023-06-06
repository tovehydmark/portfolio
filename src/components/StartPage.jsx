import React from 'react';
import 'animate.css';
import '../styles/style.scss';
import toveImage from '../images/tove-circular.png';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function StartPage() {
  const competences = [
    'React.js',
    'JavaScript',
    'Next.js',
    'TypeScript',
    'Angular.js',
    'Node.js',
    'CSS',
    'SASS',
    'Figma',
    'MongoDb',
    'Git',
    'Cypress',
    'Scrum',
    'UX',
    'WCAG',
    'Mantine',
    'Chakra UI',
    'Semantic UI',
  ];

  const printCompetences = competences.map((competence, i) => {
    return (
      <div key={i} className="competence animate__animated animate__fadeIn animate__delay-1s">
        {competence}
      </div>
    );
  });

  gsap.to('#rotating-image', {
    rotation: 900,
    duration: 1,
    scrollTrigger: {
      trigger: '#image-wrapper',
      scrub: 1,
    },
  });

  return (
    <>
      <h1>I am Tove</h1>
      <div id="image-wrapper">
        <div id="rotating-image">
          <img src={toveImage} alt="tove" width={100} height={100} />
        </div>
      </div>
      <section className="start-page-layout">
        <p className="presentation">
          Welcome to my site. I am a <span className="enhanced">Frontend</span> developer who builds web applications.
          My expertise lays in <span className="enhanced">React.js</span> and{' '}
          <span className="enhanced">TypeScript</span>. I also write fullstack applications using{' '}
          <span className="enhanced">Node.js</span> for the backend. <br />
          <br />
          Having studied and worked remotely for the last two years, I have learnt to manage my time and work
          efficiently all on my own merit.{' '}
          <span className="enhanced">I am open for any remote or hybrid role in London </span>(my current location) or{' '}
          <span className="enhanced">Stockholm </span>(my second home).
        </p>
        <div className="competences-box">{printCompetences}</div>
      </section>
    </>
  );
}

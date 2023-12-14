import React from 'react';
import 'animate.css';
import '../styles/style.scss';
import { RotatingImage } from './RotatingImage';
import Portfolio from './Portfolio';
export function StartPage() {
  const competences = [
    'React.js',
    'JavaScript',
    'Next.js',
    'TypeScript',
    'Angular.js',
    'Node.js',
    'HTML',
    'CSS',
    'SASS',
    'GreenSock',
    'Figma',
    'MongoDB',
    'Mongoose',
    'REST API',
    'GraphQL',
    'Git',
    'Cypress',
    'Scrum',
    'UX',
    'WCAG',
    'Mantine',
    'Chakra UI',
    'Semantic UI',
    'Shopify',
    'Liquid',
  ];

  const printCompetences = competences.map((competence, i) => {
    return (
      <div key={i} className="competence animate__animated animate__fadeIn animate__delay-1s">
        {competence}
      </div>
    );
  });

  return (
    <>
      <h1>I am Tove</h1>
      <RotatingImage></RotatingImage>{' '}
      <section className="start-page-layout">
        <p className="presentation">
          I am a <span className="enhanced">Frontend</span> developer who builds web applications. My expertise lays in{' '}
          <span className="enhanced">React.js</span> and <span className="enhanced">TypeScript</span>. I also write
          fullstack applications using <span className="enhanced">Node.js</span> for the backend. <br />
          <br /> Having two years of experience in web development, I have learnt to manage my time and work
          efficiently. I am <span className="enhanced">open to work </span>and I am interested in{' '}
          <span className="enhanced">hybrid/remote </span>roles and <span className="enhanced">freelance projects</span>{' '}
          in <span className="enhanced">London </span>or <span className="enhanced">Stockholm. </span>
        </p>
        <div className="competences-box">{printCompetences}</div>
      </section>
      <Portfolio></Portfolio>
    </>
  );
}

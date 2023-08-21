import React from 'react';
import 'animate.css';
import '../styles/style.scss';
import { RotatingImage } from './RotatingImage';
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

  return (
    <>
      <h1>I am Tove</h1>
      <RotatingImage></RotatingImage>{' '}
      <section className="start-page-layout">
        <p className="presentation">
          Welcome to my site. I am a <span className="enhanced">Frontend</span> developer who builds web applications.
          My expertise lays in <span className="enhanced">React.js</span> and{' '}
          <span className="enhanced">TypeScript</span>. I also write fullstack applications using{' '}
          <span className="enhanced">Node.js</span> for the backend. <br />
          <br />
          Having studied and worked remotely for the last two years, I have learnt to manage my time and work
          efficiently all on my own merit. I am sharing my time between <span className="enhanced">
            London{' '}
          </span>and <span className="enhanced">Stockholm </span> and I am looking for any{' '}
          <span className="enhanced">hybrid/remote roles</span> and{' '}
          <span className="enhanced">freelance projects.</span>
        </p>
        <div className="competences-box">{printCompetences}</div>
      </section>
    </>
  );
}

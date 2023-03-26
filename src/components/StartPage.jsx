import React from 'react';
import 'animate.css';
import '../styles/style.scss';

export function StartPage() {
  const competences = [
    'React.js',
    'JavaScript',
    'Next.js',
    'TypeScript',
    'Angular',
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
  ];

  const printCompetences = competences.map((competence) => {
    return (
      <>
        <div className="competence animate__animated animate__fadeIn animate__delay-1s">{competence}</div>
      </>
    );
  });

  return (
    <>
      <h1 className="i-am-tove">I am Tove</h1>
      <section className="start-page-layout">
        <p className="presentation">
          Welcome to my site. I am a <span className="enhanced">Frontend</span> developer who builds web applications.
          My expertise lays in <span className="enhanced">React.js</span> and{' '}
          <span className="enhanced">TypeScript</span>. I also write fullstack applications using{' '}
          <span className="enhanced">Node.js</span> for the backend. <br />
          <br />
          Having studied and worked remotely for the last two years, I have learnt to manage my time and work
          efficiently all on my own merit. I am open for any remote or hybrid role in London (my current location) or
          Stockholm (my home town).
        </p>
        <div className="competences-box">{printCompetences}</div>
      </section>
    </>
  );
}

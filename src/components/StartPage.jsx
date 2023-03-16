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
      <div className="about">
        <h1>Hey, I am Tove</h1>
        <p className="presentation">
          I build web applications with my main focus on <span className="enhanced">Frontend</span> (but I also get
          excited building dynamic apps)
        </p>
      </div>
      <div className="competencesBox">{printCompetences}</div>
    </>
  );
}

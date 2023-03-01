import React from 'react';
import 'animate.css';
import '../styles/style.scss';

export function StartPage() {
  const competenceList = [
    'JavaScript',
    'TypeScript',
    'Next.js',
    'Node.js',
    'cypress.js',
    'CSS',
    'SASS',
    'Mantine',
    'Semantic UI',
  ];

  const printCompetences = competenceList.map((competence, i) => {
    return (
      <>
        <p className="competences animate__animated animate__rollIn animate__delay-1s">{competence}</p>
      </>
    );
  });
  return (
    <>
      <div className="nameSection">
        <h1>
          <span className="tove">tove</span>
          <span className="hydmark"> hydmark</span>
        </h1>
      </div>

      <article className="about">
        <p>
          graduating from the media institute in june 2022,{' '}
          <strong>
            i am a<span> frontend developer</span>{' '}
          </strong>
          in the making who thrives at the border between frontend and backend. i build a variety of applications, from
          booking systems to games with chat functionality, diarys, log in pages and more. current interest: Next.js
        </p>
      </article>
      <div className="competences-section"> {printCompetences}</div>
    </>
  );
}

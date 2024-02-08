import React, { useState, useEffect } from 'react';
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
  const [index, setIndex] = useState(0);
  const words = ['Frontend Developer', 'Fullstack Developer', 'React Developer', 'Shopify Developer'];
  const delay = 1000;

  const printCompetences = competences.map((competence, i) => {
    return (
      <div key={i} className="competence animate__animated animate__fadeIn animate__delay-1s">
        {competence}
      </div>
    );
  });

  useEffect(() => {
    if (index >= words.length) return;

    // Set a timeout to update the index after the specified delay
    const timeoutId = setTimeout(() => {
      setIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, delay);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [index, words.length, delay]);

  return (
    <>
      <div className="i-am-tove">
        <h1>Hi, I'm Tove.</h1>
        <p>
          I am a freelance <span className="enhanced-purple">{words[index]}</span>
        </p>
      </div>

      <section className="start-page-layout">
        <p className="presentation">
          I specialize in <span className="enhanced">React.js</span>, <span className="enhanced">TypeScript</span>,
          <span className="enhanced"> Node.js</span>, and <span className="enhanced"> Shopify</span> development.
          <br />
          <br /> With 2,5+ years of experience in web development, I am <span className="enhanced">open to work </span>
          and I am excited about <span className="enhanced">hybrid/remote </span>roles and{' '}
          <span className="enhanced">freelance projects</span> in London or Stockholm.
        </p>
        <div className="competences-box">{printCompetences}</div>
      </section>
      <Portfolio></Portfolio>
    </>
  );
}

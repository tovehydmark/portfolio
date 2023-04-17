import '../styles/style.scss';
import { useState, useEffect } from 'react';

export function Cv() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('cvData.json')
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
      });
  }, []);

  const printExperiences = experiences.map((experience) => {
    return (
      <article className="experience-container">
        <h2>{experience.role}</h2>
        <p className="work-details">
          {experience.workplaceName} - {experience.location} - {experience.timePeriod}
          <br />
        </p>
        <p>{experience.description}</p>
      </article>
    );
  });

  return (
    <>
      <h1>CV</h1>
      <section className="experience-section">{printExperiences}</section>
    </>
  );
}

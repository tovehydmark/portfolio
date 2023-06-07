import '../styles/style.scss';
import data from '../data/cvData.json';
import { RotatingImage } from './RotatingImage';

export function Cv() {
  const printExperiences = data.map((experience, i) => {
    return (
      <article className="experience-container" key={i}>
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
      <RotatingImage></RotatingImage>
      <section className="experience-section">{printExperiences}</section>
    </>
  );
}

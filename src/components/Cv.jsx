import '../styles/style.scss';
// import { useEffect } from 'react';

export function Cv() {
  const experiences = [
    {
      workplaceName: 'Hive and Five Förnyelsebyrå',
      role: 'Frontendutvecklare, praktikant',
      location: 'Distans',
      timePeriod: '2022, nuvarande praktikplats',
      description:
        'Jag arbetar med att vidareutveckla plattformen adventurehero.se som är ett bokningssystem där olika aktörer kan lägga ut sina event som kunder kan boka. Systemet är skrivet i React.js med TypeScript. Jag arbetar även med att utveckla läromedelsplattformen plugga.tech som är en utbildingsplattform för utvecklare skriven i Next.js med TypeScript.',
    },
    {
      workplaceName: 'Blåbär Nordic Living',
      role: 'Barista och affärsbiträde',
      location: 'London',
      timePeriod: '2022, nuvarande extrajobb',
      description: 'Arbetar extra under studietiden som barista och affärsbiträde på caféet/butiken Blåbär i London.',
    },
    {
      workplaceName: 'Cancer Research UK',
      role: 'Assisterande butikschef',
      location: 'London',
      timePeriod: '2020 (vikariat)',
      description:
        'Ansvarade för driften av en secondhandbutik och arbetade därigenom med att samla in pengar till cancerforskning.',
    },
    {
      workplaceName: 'R&H cafe gallery',
      role: 'Servitris',
      location: 'London',
      timePeriod: '2018-2020',
      description:
        'Arbetade med att ge gästerna bästa möjliga service med allt vad det innebär på detta persiska café.',
    },
    {
      workplaceName: 'Hemköp',
      role: 'Avdelningsansvarig',
      location: 'Stockholm',
      timePeriod: '2012-2017',
      description:
        'Ansvarade för frukt- och gröntavdelningen med beställningar, prishantering, avdelningsdesign med mer. Jag var även huvudansvarig i butiken under mina kvällspass.',
    },
  ];

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

  // const getData = () => {
  //   fetch('./experiences.json')
  //     .then((response) => response.json())
  //     .then((data) => console.log('data', data));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      <section className="experience-section">{printExperiences}</section>
    </>
  );
}

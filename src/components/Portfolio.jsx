import { React } from 'react';
import '../styles/style.scss';
import PortfolioItem from './PortfolioItem';

export function Portfolio() {
  const portfolioItemsArray = [
    {
      name: 'pluggaTech',
      img: './images/plugga.tech.png',
      link: 'https://adventurehero.se',
      about:
        'I worked on the site Plugga.tech during my internship at HiveAndFive. Plugga.tech is an educational platform with video content created for web developers. I worked on developing new features, designed and implemented functionality and fixed bugs. The project is written in Next.js with TypeScript and tests were written in Cypress.',
    },
    {
      name: 'adventureHero',
      img: './images/adventurehero.png',
      link: 'https://plugga.tech',
      about:
        "I've worked on the site Adventurehero.se during my internship as a frontend developer at HiveAndFive. Adventurehero is a booking system where businesses can advertise and manage events and activities that anyone can book. During the internship, I have developed new features from creating designs in Figma, having meetings with the customer, to implementing the feature in code. The project is written in React.js with TypeScript and Node.js.",
    },
    {
      name: 'adventureHero',
      img: './images/adventurehero.png',
      link: 'https://plugga.tech',
      about:
        "I've worked on the site Adventurehero.se during my internship as a frontend developer at HiveAndFive. Adventurehero is a booking system where businesses can advertise and manage events and activities that anyone can book. During the internship, I have developed new features from creating designs in Figma, having meetings with the customer, to implementing the feature in code. The project is written in React.js with TypeScript and Node.js.",
    },
    {
      name: 'adventureHero',
      img: './images/adventurehero.png',
      link: 'https://plugga.tech',
      about:
        "I've worked on the site Adventurehero.se during my internship as a frontend developer at HiveAndFive. Adventurehero is a booking system where businesses can advertise and manage events and activities that anyone can book. During the internship, I have developed new features from creating designs in Figma, having meetings with the customer, to implementing the feature in code. The project is written in React.js with TypeScript and Node.js.",
    },
    {
      name: 'adventureHero',
      img: './images/adventurehero.png',
      link: 'https://plugga.tech',
      about:
        "I've worked on the site Adventurehero.se during my internship as a frontend developer at HiveAndFive. Adventurehero is a booking system where businesses can advertise and manage events and activities that anyone can book. During the internship, I have developed new features from creating designs in Figma, having meetings with the customer, to implementing the feature in code. The project is written in React.js with TypeScript and Node.js.",
    },
  ];

  const printPortfolioItems = portfolioItemsArray.map((item) => {
    return (
      <article key={item.img}>
        <img className="portfolio-image" src={item.img} alt={item.name}></img>
        <PortfolioItem about={item.about} name={item.name} link={item.link}></PortfolioItem>
      </article>
    );
  });

  return (
    <>
      <section className="print-portfolio">{printPortfolioItems}</section>
    </>
  );
}

export default Portfolio;

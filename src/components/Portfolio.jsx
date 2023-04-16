import { React } from 'react';
import '../styles/style.scss';
import PortfolioItem from './PortfolioItem';

export function Portfolio() {
  const portfolioItemsArray = [
    { name: 'pluggaTech', img: './images/plugga.tech.png', link: 'https://adventurehero.se', about: 'about AH' },
    { name: 'adventureHero', img: './images/adventurehero.png', link: 'https://plugga.tech', about: 'about PT' },
  ];

  const printPortfolioItems = portfolioItemsArray.map((item) => {
    return (
      <article key={item.img} className="portfolio-item">
        <img src={item.img} alt={item.name}></img>
        <PortfolioItem about={item.about}></PortfolioItem>
        <a href={item.link} target="_blank" rel="noreferrer">
          Visit the site at {item.name}
        </a>
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

import { React } from 'react';
import '../styles/style.scss';
import data from '../data/portfolioData.json';

import PortfolioItem from './PortfolioItem';

export function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <section className="portfolio">
        {data.map((item) => {
          return (
            <article key={item.img} className="print-all-portfolio-items">
              <PortfolioItem
                src={item.img}
                about={item.about}
                name={item.name}
                link={item.link}
                githubLink={item.githubLink}
              ></PortfolioItem>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Portfolio;

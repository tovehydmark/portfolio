import { React, useEffect, useState } from 'react';
import '../styles/style.scss';
import PortfolioItem from './PortfolioItem';

export function Portfolio() {
  const [portfolioItemsArray, setPortfolioItemsArray] = useState([]);

  useEffect(() => {
    fetch('portfolioData.json')
      .then((res) => res.json())
      .then((data) => {
        setPortfolioItemsArray(data);
      });
  }, []);

  return (
    <>
      <h1>Portfolio</h1>
      <section className="portfolio">
        {portfolioItemsArray.map((item) => {
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

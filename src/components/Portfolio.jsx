import React from 'react';
import '../styles/style.scss';
import { useState } from 'react';

export function Portfolio() {
  const [isHovering, setIsHovering] = useState(false);
  const portfolioItemsArray = [
    { name: 'pluggaTech', img: './images/plugga.tech.png', link: 'www.adventurehero.se' },
    { name: 'adventureHero', img: './images/adventurehero.png', link: 'www.plugga.tech' },
  ];

  const PortfolioItem = ({ handleMouseOver }) => {
    const printPortfolioItems = portfolioItemsArray.map((item) => {
      return (
        <div key={item.img} onMouseOver={handleMouseOver} className="portfolio-item">
          <img src={item.img} alt={item.name}></img>
        </div>
      );
    });
    return printPortfolioItems;
  };

  const PortfolioItemHovered = ({ handleMouseOut }) => {
    return (
      <div onMouseOut={handleMouseOut}>
        Hovering right meow!
        <span role="img" aria-label="cat">
          🐱
        </span>
      </div>
    );
  };
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  console.log('isHovering', isHovering);

  return (
    <>
      <div>
        {' '}
        {isHovering ? (
          <PortfolioItemHovered handleMouseOut={handleMouseOut} />
        ) : (
          <PortfolioItem handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />
        )}
      </div>
    </>
  );
}

export default Portfolio;

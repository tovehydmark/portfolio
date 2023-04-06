import React from 'react';
import '../styles/style.scss';
import { useState } from 'react';

export function Portfolio() {
  const [isHovering, setIsHovering] = useState(false);

  console.log('isHovering', isHovering);
  const PortfolioItem = ({ handleMouseOver, handleMouseOut }) => {
    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Hover Me
      </div>
    );
  };

  const PortfolioItemHovered = () => {
    return (
      <div>
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

  return (
    <>
      <div>
        {' '}
        <PortfolioItem handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />
        {isHovering && <PortfolioItemHovered />}
      </div>
    </>
  );
}

export default Portfolio;

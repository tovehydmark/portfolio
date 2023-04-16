import { React, useState } from 'react';

export function PortfolioItem(props) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="portfolio-item">
      <button onClick={() => setReadMore(!readMore)}>{readMore ? 'View less' : 'Read more'}</button>
      {readMore ? <div className="about-the-project">{props.about}</div> : null}
      <a href={props.link} target="_blank" rel="noreferrer">
        Visit the site at {props.name}
      </a>
    </div>
  );
}

export default PortfolioItem;

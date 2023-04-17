import { React, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export function PortfolioItem(props) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="portfolio-item">
      {' '}
      <img className="portfolio-image" src={props.src} alt={props.name}></img>
      <button onClick={() => setReadMore(!readMore)}>{readMore ? 'View less' : 'Read more'}</button>
      {readMore ? <div className="about-the-project">{props.about}</div> : null}
      <div>
        <a href={props.link} target="_blank" rel="noreferrer">
          {' '}
          Visit the published site <FaExternalLinkAlt></FaExternalLinkAlt>
        </a>
      </div>
      {props.githubLink ? (
        <div>
          or view the code at{' '}
          <a href={props.githubLink} target="_blank" rel="noreferrer">
            github <FaExternalLinkAlt></FaExternalLinkAlt>
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default PortfolioItem;

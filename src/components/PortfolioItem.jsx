import { React, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export function PortfolioItem(props) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="portfolio-item">
      <button onClick={() => setReadMore(!readMore)}>{readMore ? 'View less' : 'Read more'}</button>
      {readMore ? <div className="about-the-project">{props.about}</div> : null}
      <p>
        <a href={props.link} target="_blank" rel="noreferrer">
          {' '}
          Visit the published site
          <FaExternalLinkAlt></FaExternalLinkAlt>
        </a>
      </p>

      {props.githubLink ? (
        <p>
          or view the code at{' '}
          <a href={props.githubLink}>
            github<FaExternalLinkAlt></FaExternalLinkAlt>
          </a>
        </p>
      ) : null}
    </div>
  );
}

export default PortfolioItem;

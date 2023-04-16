import { React, useState } from 'react';

export function PortfolioItem(props) {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <button onClick={() => setReadMore(!readMore)}>Read more</button>
      {readMore ? props.about : null}
    </>
  );
}

export default PortfolioItem;

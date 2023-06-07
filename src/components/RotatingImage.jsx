import toveImage from '../images/tove-circular.png';
import React, { useEffect } from 'react';

export function RotatingImage() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      // Calculate the rotation angle based on the scroll position
      const rotation = scrollPosition * 0.2;

      // Apply the rotation to the image element
      const image = document.getElementById('rotating-image');
      image.style.transform = `rotate(${rotation}deg)`;
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="image-wrapper">
      <div id="rotating-image">
        <img src={toveImage} alt="tove" width={80} height={80} />
      </div>
    </div>
  );
}

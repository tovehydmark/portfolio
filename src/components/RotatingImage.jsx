import toveImage from '../images/tove-circular.png';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function RotatingImage() {
  useEffect(() => {
    gsap.to('#rotating-image', {
      rotation: 900,
      duration: 2,
      scrollTrigger: {
        trigger: '#rotating-image',
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <div id="image-wrapper">
        <div id="rotating-image">
          <img src={toveImage} alt="tove" width={80} height={80} />
        </div>
      </div>
    </>
  );
}

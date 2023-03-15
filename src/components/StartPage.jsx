import React from 'react';
import 'animate.css';
import '../styles/style.scss';

export function StartPage() {
  return (
    <>
      <div className="about">
        <h1>Hey, I am Tove</h1>
        <p className="presentation">
          I build web applications with my main focus on <span className="enhanced">Frontend</span> (but I also get
          excited building dynamic apps)
        </p>
      </div>
    </>
  );
}

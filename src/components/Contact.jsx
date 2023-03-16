import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.scss';

export function Contact() {
  const socialMedia = [
    { media: 'Github', link: 'https://github.com/tovehydmark' },
    { media: 'LinkedIn', link: 'https://www.linkedin.com/in/tove-hydmark/' },
  ];

  const contact = [
    { media: 'Email', data: 'tovehydmark@gmailcom' },
    { media: 'Phone', data: '+447476320569' },
  ];
  const printSocialMedia = socialMedia.map((media) => {
    return (
      <div className="social-media-icon">
        <a href={media.link} target="_blank" rel="noreferrer">
          {media.media}
        </a>
      </div>
    );
  });

  const printContact = contact.map((item) => {
    return (
      <div className="social-media-icon">
        <p>
          {item.media}: {item.data}
        </p>
      </div>
    );
  });
  return (
    <>
      <div className="social-media">
        {printSocialMedia}
        {printContact}
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <p>
          I'm currently living in <span className="enhanced">London</span> but I also have a home in{' '}
          <span className="enhanced">Stockholm.</span> <br />
          Send me an email or give me a call if you're interested in my work
        </p>
      </div>
    </>
  );
}

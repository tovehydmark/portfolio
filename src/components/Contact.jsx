import React from 'react';
import '../styles/style.scss';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { RotatingImage } from './RotatingImage';

export function Contact() {
  const socialMedia = [
    {
      media: 'Github',
      link: 'https://github.com/tovehydmark',
      icon: <FaGithub style={{ width: '2rem', height: '2rem' }} />,
    },
    {
      media: 'LinkedIn',
      link: 'https://www.linkedin.com/in/tove-hydmark/',
      icon: <FaLinkedin style={{ width: '2rem', height: '2rem' }} />,
    },
  ];

  const contact = [
    { media: 'Email', data: 'tovehydmark@gmailcom', icon: <FaEnvelope style={{ width: '2rem', height: '2rem' }} /> },
    { media: 'Phone', data: '+447476320569', icon: <FaPhone style={{ width: '2rem', height: '2rem' }} /> },
  ];

  const printSocialMedia = socialMedia.map((media, i) => {
    return (
      <div key={i}>
        <a href={media.link} target="_blank" rel="noreferrer">
          {media.icon}
        </a>
      </div>
    );
  });

  const printContact = contact.map((item, i) => {
    return (
      <div key={i}>
        {item.media === 'Email' ? (
          <a href={'mailto:' + item.link} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        ) : (
          <a href={'tel:' + item.link} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        )}
      </div>
    );
  });
  return (
    <>
      <h1>Contact</h1>
      <RotatingImage></RotatingImage>
      <section className="contact-section">
        <div className="contact-info">
          <p>
            I'm currently living in <span className="enhanced">London</span> but I also have a home in{' '}
            <span className="enhanced">Stockholm.</span> <br />
            Please send me an email or give me a call if you're interested in my work
          </p>
        </div>
        <div className="social-media">
          {printSocialMedia}
          {printContact}
        </div>
      </section>
    </>
  );
}

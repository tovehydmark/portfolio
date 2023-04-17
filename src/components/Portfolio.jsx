import { React } from 'react';
import '../styles/style.scss';
import PortfolioItem from './PortfolioItem';

export function Portfolio() {
  const portfolioItemsArray = [
    {
      name: 'pluggaTech',
      img: './images/plugga.tech.png',
      link: 'https://plugga.tech',
      about:
        'I worked on the site Plugga.tech during my internship at HiveAndFive. Plugga.tech is an educational platform with video content created for web developers. I worked on developing new features, designed and implemented functionality and fixed bugs. The project is written in Next.js with TypeScript and tests were written in Cypress.',
    },
    {
      name: 'adventureHero',
      img: './images/adventurehero.png',
      link: 'https://adventurehero.se',
      about:
        "I've worked on the site Adventurehero.se during my internship as a frontend developer at HiveAndFive. Adventurehero is a booking system where businesses can advertise and manage events and activities that anyone can book. During the internship, I have developed new features from creating designs in Figma, having meetings with the customer, to implementing the feature in code. The project is written in React.js with TypeScript and Node.js.",
    },
    {
      name: 'movie-webshop',
      img: './images/movie-webshop.png',
      link: 'https://tovehydmark.github.io/angular-webshop/webshop/',
      githubLink: 'https://github.com/tovehydmark/angular-webshop',
      about:
        'I created this webshop whilst learning JavaScript at Medieinstitutet. It is written in Angular and TypeScript.',
    },
    {
      name: 'readingRivalry',
      img: './images/reading-rivalry.png',
      link: 'https://tovehydmark.github.io/book-challenge-design/',
      githubLink: 'https://github.com/tovehydmark/book-challenge-design',
      about:
        'Reading Rivalry is my design created for a school project. The purpose of the assignment was to create a design and swap it with a fellow class mate to code your friends design.',
    },
    {
      name: 'newsletter',
      img: './images/newsletter.png',
      link: 'https://tovehydmark.github.io/frontend-do-you-want-my-newsletter/#/',
      githubLink: 'https://github.com/tovehydmark/frontend-do-you-want-my-newsletter',
      about:
        'A project I made early on whilst learning React.js and Node.js. The aim was to deleop a page where a user can create an account and decide whether or not they want to sign up for a newsletter.',
    },
    {
      name: 'login-page',
      img: './images/login-page.png',
      link: 'https://tovehydmark.github.io/login-page-vanilla-js/',
      githubLink: 'https://github.com/tovehydmark/login-page-vanilla-js',
      about:
        'This is a simple login page I wrote whilst learning vanillaJS. The application is using local storage to store the data.',
    },
    {
      name: 'cv-site',
      img: './images/cv-site.png',
      link: 'https://tovehydmark.github.io/cv-site/',
      githubLink: 'https://github.com/tovehydmark/cv-site',
      about:
        'When learning HTML and CSS, I created this CV site. The content on the site has not been updated since but please have a look if you want anyway :)',
    },
    {
      name: 'restaurant',
      img: './images/codfather.png',
      link: 'https://spontaneous-elf-ec9ee9.netlify.app/',
      githubLink: 'https://github.com/tovehydmark/restaurange',
      about:
        'The Codfather is a fictive restaurant I created together with few classmates using React.js. The main feature is the booking system making it possible to book a table at the restaurant.',
    },
  ];

  return (
    <>
      <h1>Portfolio</h1>
      <section className="portfolio">
        {portfolioItemsArray.map((item) => {
          return (
            <article key={item.img} className="print-all-portfolio-items">
              <PortfolioItem
                src={item.img}
                about={item.about}
                name={item.name}
                link={item.link}
                githubLink={item.githubLink}
              ></PortfolioItem>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Portfolio;

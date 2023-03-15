import React from 'react';
import { bool } from 'prop-types';

import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span aria-label="home"></span>
        home
      </a>
      <a href="/portfolio">
        <span aria-label="portfolio"></span>
        portfolio
      </a>
      <a href="/cv">
        <span aria-label="cv"></span>
        cv
      </a>
      <a href="/contact">
        <span aria-label="contact"></span>
        contact
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;

import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: ${({ theme }) => theme.primaryLight}; */
  /* background: lightblue; */
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  //TODO: fixa variabler för bredd

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    /* color: ${({ theme }) => theme.primaryDark}; */
    color: aquamarine;
    text-decoration: none;
    transition: color 0.3s linear;

    //TODO: fixa variabler för bredd
    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      /* color: ${({ theme }) => theme.primaryHover}; */
      color: red;
    }
  }
`;

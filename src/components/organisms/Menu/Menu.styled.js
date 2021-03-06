import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #3c485e;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #e3e3e3;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #31a4da;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default StyledMenu;

import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    black: '#151515',
    white: '#fff',
    gray: '#373737'
  }
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    overflow-x: hidden;
    h1, h2, h3, h4, h5, h6{
        margin-bottom:0;
    }
  }
`;

export const ProjectsContainer = styled.div`
  padding: 0 0.5rem;
`;
export const ProjectItemContainer = styled.div`
  padding: 1 1.5rem;
  max-width: 90%;
  margin: 10rem auto 0 auto;
  img {
    max-width: 500px;
    max-height: 700px;
  }
  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.gray};
    line-height: 32px;
    letter-spacing: 4px;
    margin-bottom: 1.5rem;
  }
  h2 {
    color: #fff;
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 4px;
    margin-bottom: 1.5rem;
  }
  h4 {
    color: #f9da87;
    text-align: center;
    letter-spacing: 4px;
    text-decoration: none;
    cursor: crosshair;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;

export const HeaderStyled = styled.div`
  max-width: 800px;
  padding: 1.5rem 4.75rem;

  padding-left: 76px;
  h2 {
    margin: 3rem 0 1rem 0;
    color: ${(props) => props.theme.colors.white};
    font-weight: lighter;
    font-size: 1.8rem;
  }
`;

export const Body = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
`;

export const FooterStyled = styled.div`
  font-size: 12px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.black};
  padding: 10rem 0;
  p,
  h5 {
    color: ${(props) => props.theme.colors.gray};
    font-size: 0.75rem;
    line-height: 32px;
    text-align: center;
    letter-spacing: 4px;
  }

  h6 {
    color: #636363;
    margin-bottom: 5rem;
    font-size: 0.75rem;
    line-height: 32px;
    text-align: center;
    letter-spacing: 4px;
  }
`;

export const Socials = styled.div`
  margin-bottom: 2rem;
  svg {
    max-width: 35px;
    fill: ${(props) => props.theme.colors.gray};
    margin-right: 1.5rem;
    transition: all 0.4s ease;
    &:hover {
      fill: #fff;
    }
  }
`;

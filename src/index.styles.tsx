import { createGlobalStyle } from 'styled-components';

export const MEDIA_SIZES = {
  height_944: '(max-height: 59em)',
  height_736: '(max-height: 46em)',
  width_1200: '(max-width: 75em)',
  width_768: '(max-width: 48em)',
  width_688: '(max-width: 43em)',
  width_592: '(max-width: 37em)',
  width_530: '(max-width: 33em)',
  width_512: '(max-width: 32em)',
  width_480: '(max-width: 30em)',
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --orange: hsl(37, 98%, 54%);
    --text-dark:hsl(206, 45%, 15%);
    --text-white: hsl(0, 0%, 99%);
    --text-grey: hsl(203, 22%, 55%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    height: 100%;
  }

  body {
    min-height: 100%;
    height: 100%;
    font-family: 'Atkinson Hyperlegible', sans-serif;

    background-color: hsl(0, 0%, 99%);
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    min-height: 100%;
  }

  h1 {
    font-size: 4.8rem;

    @media ${MEDIA_SIZES.width_592} {
      font-size: 2.4rem;
    }
  }

  h2 {
    font-size: 3.2rem;

    @media ${MEDIA_SIZES.width_592} {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2rem;

    @media ${MEDIA_SIZES.width_480} {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.8rem;

    @media ${MEDIA_SIZES.width_768} {
      font-size: 1.5rem;
    }
  }
`;

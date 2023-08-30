import styled from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

export const GameBoardContainer = styled.div`
  display: flex;
  align-items: center;

  width: 53.2rem;
  margin: 0 auto 2rem;
  
  &.large {
    width: 57.2rem;
  }

  @media ${MEDIA_SIZES.width_688} {
    flex-grow: 1;
    margin: 2rem auto;

    &.large {
      width: 88%;
    }
  }
  
  @media ${MEDIA_SIZES.width_592} {
    width: 100%;

    &.large {
      width: 100%;
    }
  }
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2rem;

  .large & {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 1.6rem;
  }

  @media ${MEDIA_SIZES.width_688} {
    aspect-ratio: 1 / 1;
    width: 100%;

    .large & {
      aspect-ratio: 1 / 1;
      width: 100%;
    }
  }

  @media ${MEDIA_SIZES.width_592} {
    .large & {
      grid-gap: 0.9rem;
    }
  }

  @media ${MEDIA_SIZES.width_480} {
    grid-gap: 1.2rem;
  }
`;

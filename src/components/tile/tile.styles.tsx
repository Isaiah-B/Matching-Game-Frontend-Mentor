import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MEDIA_SIZES } from '../../index.styles';

export const TileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 11.8rem;
  height: 11.8rem;
  min-width: 7.3rem;
  min-height: 7.3rem;

  border-radius: 50%;
  background-color: hsl(204, 30%, 27%);
  cursor: pointer;

  &:hover { background-color: hsl(205, 37%, 55%); }

  &.selected { background-color: hsl(37, 98%, 54%); }

  &.matched {
    background-color: hsl(203, 28%, 79%);
    cursor: default;
  }

  .large & {
    width: 8.2rem;
    height: 8.2rem;
    min-width: 4.7rem;
    min-height: 4.7rem;

    span {
      font-size: 4.4rem;
      line-height: 5.5rem;
    }
  }

  span {
    font-size: 5.6rem;
    line-height: 6.9rem;
    color: var(--text-white);

    user-select: none;
  }
  
  @media ${MEDIA_SIZES.width_688} {
    width: 100%;
    height: auto;

    .large & {
      width: 100%;
      height: auto;
    }
  }

  @media ${MEDIA_SIZES.width_480} {
    span { font-size: 4rem; }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 5.6rem;
  color: var(--text-white);

  user-select: none;

  .large & {
    font-size: 4.4rem;
  }
  
  @media ${MEDIA_SIZES.width_592} {
    font-size: 4rem;
  }

  @media ${MEDIA_SIZES.width_512} {
    .large & {
      font-size: 2.4rem;
    }
  }
`;

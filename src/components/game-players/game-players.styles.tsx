import styled, { css } from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

const TabContainerBase = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 23%;
  padding: 1.6rem 2rem;
  border-radius: 10px;
  background-color: hsl(203, 25%, 90%);

  p {
    color: var(--text-grey);
  }

  span {
    font-size: 3.2rem;
    color: hsl(205, 30%, 27%);
  }

  &.selected {
    background-color: var(--orange);

    p, span {
      color: var(--text-white);
    };

    &::before {
      display: block;
    }
  }

  @media ${MEDIA_SIZES.width_768} {
    span { font-size: 2.4rem; }
  }
`;

export const SingleplayerTabContainer = styled.div`
  ${TabContainerBase};

  @media ${MEDIA_SIZES.width_688} {
    flex-direction: column;
    gap: 0.5rem;
    
    padding: 0.9rem 1.6rem;
  }
`;

export const MultiplayerTabContainer = styled.div`
  ${TabContainerBase};

  &::before {
    display: none;

    content: '';
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);

    width: 0;
    height: 0;
    border: 2rem solid transparent;
    border-top: 0;
    border-bottom: 2rem solid var(--orange);
  }

  @media ${MEDIA_SIZES.width_768} {
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;

    padding: 0.9rem 1.6rem;
  }

  @media ${MEDIA_SIZES.width_512} {
    align-items: center;
  }

  @media ${MEDIA_SIZES.width_768} {
    &::before {
      top: -1.3rem;
      border: 1.6rem solid transparent;
      border-top: 0;
      border-bottom: 1.6rem solid var(--orange);
    }
  }
`;

export const GamePlayersContainer = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  width: 100%;

  @media ${MEDIA_SIZES.width_512} {
    gap: 2.4rem;
  }
`;

export const CurrentTurnText = styled.span<{ numPlayers: number }>`
  position: absolute;
  bottom: -4rem;
  left: 4%;
  transition: all 0.3s;
  
  font-size: 1.3rem;
  line-height: 1.6rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--text-dark);

  &.player-2 { left: 30%; }
  &.player-3 { left: 55.6%; }
  &.player-4 { left: 81.4%; }

  ${(props) => props.numPlayers === 2
    && 'transform: translateX(182%);'}

  ${(props) => props.numPlayers === 3
    && 'transform: translateX(90%);'}

  @media ${MEDIA_SIZES.width_1200} {
    left: 0;
    transform: translateX(-50%);
  }

  @media ${MEDIA_SIZES.width_768} {
    display: none;
  }
`;

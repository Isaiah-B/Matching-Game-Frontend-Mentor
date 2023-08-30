import styled from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 800;

  background-color: hsla(0, 0%, 0%, 0.5);
`;

export const GameOverContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  width: 65.4rem;
  padding: 5rem 5.6rem 7rem;
  border-radius: 20px;
  background-color: hsl(0, 0%, 95%);

  text-align: center;

  h1 {
    margin-bottom: 1.6rem;
    color: var(--text-dark);
  }

  p {
    margin-bottom: 4rem;
    color: var(--text-grey);
  }

  @media ${MEDIA_SIZES.width_768} {
    width: 88%;
  }

  @media ${MEDIA_SIZES.width_592} {
    padding: 3.2rem 2.4rem 2.4rem;
    
    p { margin-bottom: 2.4rem; }
  }
`;

export const GameOverList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  list-style: none;
  margin-bottom: 5.6rem;

  @media ${MEDIA_SIZES.width_592} {
    gap: 0.8rem;
    margin-bottom: 2.4rem;
  }
`;

export const GameOverListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1.6rem 3.2rem;
  border-radius: 10px;
  background-color: hsl(203, 25%, 90%);

  p {
    color: var(--text-grey);
    margin-bottom: 0;
  }

  h2 { color: var(--text-dark); }

  &.winner {
    background-color: hsl(206, 45%, 15%);

    p, h2 { color: var(--text-white); }
  }

  @media ${MEDIA_SIZES.width_512} {
    padding: 1.6rem;
    
    p { font-size: 1.3rem; }
  }
`;

export const GameOverButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  @media ${MEDIA_SIZES.width_592} {
    flex-direction: column;
  }
`;

import styled, { css } from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

const ButtonBase = css`
  width: 100%;
  border: none;
  border-radius: 35px;
  cursor: pointer;

  font-family: inherit;
  white-space: nowrap;
  color: var(--text-white);
`;

export const ButtonMenuPrimary = styled.button`
  ${ButtonBase};

  font-size: 3.2rem;
  line-height: 4rem;

  padding: 1.6rem 0;
  background-color: var(--orange);

  @media ${MEDIA_SIZES.width_480} {
    padding: 0.4rem 0;
    font-size: 1.8rem;
  }

  &:hover {
    background-color: hsl(37, 100%, 65%);
  } 
`;

export const ButtonMenuSecondary = styled.button`
  ${ButtonBase};
  
  padding: 1rem;

  font-size: 2.6rem;
  line-height: 3.2rem;

  background-color: hsl(203, 28%, 79%);
  
  &:hover {
    background-color: hsl(205, 37%, 55%);
  }

  &.active {
    background-color: hsl(205, 30%, 27%);
  }

  @media ${MEDIA_SIZES.width_480} {
    padding: 0.4rem 0;
    font-size: 1.6rem;
  }
`;

export const ButtonPrimary = styled.button`
  ${ButtonBase};

  font-size: 2rem;
  line-height: 2.5rem;
  
  padding: 1.2rem 2.8rem;
  background-color: var(--orange);

  &:hover {
    background-color: hsl(37, 100%, 65%);
  }

  @media ${MEDIA_SIZES.width_480} {
    font-size: 1.8rem;
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  color: hsl(205, 30%, 27%);
  background-color: hsl(203, 25%, 90%);

  &:hover {
    color: var(--text-white);
    background-color: hsl(205, 37%, 55%);
  }
`;

import styled from 'styled-components';
import Button from '../button/button.component';
import { MEDIA_SIZES } from '../../index.styles';

export const GameHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  svg {
    fill: hsl(206, 45%, 15%);
    flex-shrink: 0;

    @media ${MEDIA_SIZES.width_480} {
      transform: scale(0.62);
    }
  }

  &::before {
    content: "";
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    z-index: 100;
    background-color: hsl(0, 0%, 0%, 50%);
  }

  &.header-mobile {
    &::before {
      display: block;
    }
  }
`;

export const GameHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;


  @media ${MEDIA_SIZES.width_592} {
    display: none;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;

    flex-direction: column;
    
    width: 90%;
    padding: 2.4rem;
    border-radius: 10px;
    background-color: hsl(0, 0%, 95%);


    .header-mobile & {
      display: flex;
    }
  }
`;

export const MenuButton = styled(Button)`
  width: auto;

  @media ${MEDIA_SIZES.width_480} {
    font-size: 1.6rem;
  }
`;

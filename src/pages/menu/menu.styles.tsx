import styled from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

export const MenuPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  min-height: 100%;
  background-color: hsl(205, 45%, 15%);
  transition: none;
  
  &.closed {
    position: absolute;
    max-height: 0;
    width: 100%;
    height: 100%;
    
    opacity: 0;
    pointer-events: none;
    transition: all 2s;
  }

  @media ${MEDIA_SIZES.width_768} {
    padding: 0 2.4rem;
  }
`;

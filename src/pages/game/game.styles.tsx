import styled from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

export const GamePageContainer = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  width: 111rem;
  max-height: 73rem;
  margin: 6.8rem auto 7.4rem;

  @media ${MEDIA_SIZES.width_1200} {
    width: 100%;
    padding: 0 4rem;
  }

  @media ${MEDIA_SIZES.width_768} {
    margin: 3.8rem auto;
  }

  @media ${MEDIA_SIZES.width_688} {
    padding: 0 2.4rem;
  }

  @media ${MEDIA_SIZES.width_480} {
    max-height: 61rem;
  }
  
  @media ${MEDIA_SIZES.height_944} {
    margin: 4.6rem auto 5.2rem;
  }

  @media ${MEDIA_SIZES.height_736} {
    margin: 2rem auto 4rem;
  }
`;

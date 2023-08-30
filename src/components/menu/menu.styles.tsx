import styled from 'styled-components';

import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import { MEDIA_SIZES } from '../../index.styles';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.8rem;

  width: 65.4rem;
  
  @media ${MEDIA_SIZES.width_768} {
    width: 100%;
  }
`;

export const LogoIcon = styled(LogoSVG)`
  fill: hsl(0, 0%, 99%);
`;

export const MenuContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  width: 100%;
  border-radius: 20px;
  padding: 5.6rem;
  background-color: hsl(0, 0%, 99%);

  @media ${MEDIA_SIZES.width_480} {
    padding: 2.4rem;
  }
`;

export const MenuSection = styled.div`
  h3 {
    margin-bottom: 1.6rem;
    color: hsl(203, 22%, 55%);

    @media ${MEDIA_SIZES.width_480} {
      margin-bottom: 1.1rem;
    }
  }
`;

export const GridRow2 = styled.div`
  display: flex;
  gap: 3rem;

  @media ${MEDIA_SIZES.width_768} {
    gap: 1rem;
  }
`;

export const GridRow4 = styled.div`
  display: flex;
  gap: 2rem;

  @media ${MEDIA_SIZES.width_768} {
    gap: 1rem;
  }
`;

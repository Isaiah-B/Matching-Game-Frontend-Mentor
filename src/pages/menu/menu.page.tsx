import { useContext } from 'react';

import Menu from '../../components/menu/menu.component';

import { AppContext } from '../../context/appContext';

import { MenuPageContainer } from './menu.styles';

function MenuPage() {
  const { isRunning } = useContext(AppContext);

  return (
    <MenuPageContainer className={isRunning ? 'closed' : ''}>
      <Menu />
    </MenuPageContainer>
  );
}

export default MenuPage;

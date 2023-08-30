import { useContext } from 'react';

import MenuPage from './pages/menu/menu.page';
import GamePage from './pages/game/game.page';

import { AppContext } from './context/appContext';

import { GlobalStyle } from './index.styles';

function App() {
  const { isRunning } = useContext(AppContext);

  return (
    <>
      <GlobalStyle />
      <MenuPage />
      {isRunning
        ? <GamePage />
        : null}
    </>
  );
}

export default App;

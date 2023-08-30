import { useContext } from 'react';

import Button from '../button/button.component';

import { AppContext } from '../../context/appContext';

import {
  GridRow2,
  GridRow4,
  LogoIcon,
  MenuContainer,
  MenuContentContainer,
  MenuSection,
} from './menu.styles';

function Menu() {
  const {
    gameOptions,
    isRunning,
    setCurrentPlayer,
    setTheme,
    setNumPlayers,
    setGridSize,
    setIsRunning,
    setIsSinglePlayer,
    createBoard,
  } = useContext(AppContext);

  const { theme, numPlayers, gridSize } = gameOptions;

  const initializeGame = () => {
    if (!isRunning) {
      setIsSinglePlayer(numPlayers === 1);
      setCurrentPlayer(1);
      setIsRunning(true);
      createBoard();
    }
  };

  return (
    <MenuContainer>
      <LogoIcon />

      <MenuContentContainer>
        <MenuSection>
          <h3>Select Theme</h3>
          <GridRow2>
            <Button
              buttonType="menu_secondary"
              isActive={theme === 'numbers'}
              onClick={() => setTheme('numbers')}
            >
              Numbers
            </Button>
            <Button
              buttonType="menu_secondary"
              isActive={theme === 'icons'}
              onClick={() => setTheme('icons')}
            >
              Icons
            </Button>
          </GridRow2>
        </MenuSection>

        <MenuSection>
          <h3>Number of Players</h3>
          <GridRow4>
            <Button
              buttonType="menu_secondary"
              isActive={numPlayers === 1}
              onClick={() => setNumPlayers(1)}
            >
              1
            </Button>
            <Button
              buttonType="menu_secondary"
              isActive={numPlayers === 2}
              onClick={() => setNumPlayers(2)}
            >
              2
            </Button>
            <Button
              buttonType="menu_secondary"
              isActive={numPlayers === 3}
              onClick={() => setNumPlayers(3)}
            >
              3
            </Button>
            <Button
              buttonType="menu_secondary"
              isActive={numPlayers === 4}
              onClick={() => setNumPlayers(4)}
            >
              4
            </Button>
          </GridRow4>
        </MenuSection>

        <MenuSection>
          <h3>Grid Size</h3>
          <GridRow2>
            <Button
              buttonType="menu_secondary"
              isActive={gridSize === 'small'}
              onClick={() => setGridSize('small')}
            >
              4x4
            </Button>
            <Button
              buttonType="menu_secondary"
              isActive={gridSize === 'large'}
              onClick={() => setGridSize('large')}
            >
              6x6
            </Button>
          </GridRow2>
        </MenuSection>

        <Button
          buttonType="menu_primary"
          onClick={initializeGame}
        >
          Start Game
        </Button>
      </MenuContentContainer>
    </MenuContainer>
  );
}

export default Menu;

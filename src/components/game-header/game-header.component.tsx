import { useContext, useState } from 'react';

import Button from '../button/button.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import { AppContext } from '../../context/appContext';
import useScreenWidth from '../../hooks/useScreenWidth';

import { GameHeaderActions, GameHeaderContainer, MenuButton } from './game-header.styles';

function GameHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { restartGame, handleNewGame } = useContext(AppContext);
  const screenWidth = useScreenWidth();

  const isMobile = screenWidth <= 592;

  const handleRestartGame = () => {
    setMobileMenuOpen(false);
    restartGame();
  };

  return (
    <GameHeaderContainer className={mobileMenuOpen ? 'header-mobile' : ''}>
      <Logo />
      {
        isMobile
          ? (
            <MenuButton
              buttonType="primary"
              onClick={() => setMobileMenuOpen(true)}
            >
              Menu
            </MenuButton>
          )
          : null
      }

      <GameHeaderActions>
        <Button
          buttonType="primary"
          onClick={handleRestartGame}
        >
          Restart
        </Button>

        <Button
          buttonType="secondary"
          onClick={() => handleNewGame()}
        >
          New Game
        </Button>

        {
          isMobile
            ? (
              <Button
                buttonType="secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume Game
              </Button>
            )
            : null
        }
      </GameHeaderActions>
    </GameHeaderContainer>
  );
}

export default GameHeader;

import { useContext } from 'react';

import Button from '../button/button.component';

import { AppContext } from '../../context/appContext';
import { convertSecondsToTime } from '../../utils';

import {
  GameOverButtonsContainer,
  GameOverContainer,
  GameOverList,
  GameOverListItemContainer,
  ModalWrapper,
} from './game-over-modal.styles';

function GameOverSingleplayer() {
  const { singlePlayer, restartGame, handleNewGame } = useContext(AppContext);
  const { timer, moves } = singlePlayer;

  return (
    <ModalWrapper>
      <GameOverContainer>
        <h1>You did it!</h1>
        <p>Game over! Here&apos;s how you got on...</p>

        <GameOverList>
          <li>
            <GameOverListItemContainer>
              <p>Time Elapsed</p>
              <h2>{convertSecondsToTime(timer)}</h2>
            </GameOverListItemContainer>
          </li>

          <li>
            <GameOverListItemContainer>
              <p>Moves Taken</p>
              <h2>{moves} Moves</h2>
            </GameOverListItemContainer>
          </li>
        </GameOverList>

        <GameOverButtonsContainer>
          <Button buttonType="primary" onClick={() => restartGame()}>Restart</Button>
          <Button buttonType="secondary" onClick={() => handleNewGame()}>Setup New Game</Button>
        </GameOverButtonsContainer>
      </GameOverContainer>
    </ModalWrapper>
  );
}

export default GameOverSingleplayer;

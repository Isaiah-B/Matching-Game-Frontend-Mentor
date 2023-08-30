import { useContext } from 'react';

import GameBoard from '../../components/game-board/game-board.component';
import GameHeader from '../../components/game-header/game-header.component';
import GameOverMultiplayer from '../../components/game-over-modal/game-over-multiplayer.component';
import GameOverSingleplayer from '../../components/game-over-modal/game-over-singleplayer.component';
import { GamePlayersMultiplayer, GamePlayersSingleplayer } from '../../components/game-players/game-players.component';

import { AppContext } from '../../context/appContext';

import { GamePageContainer } from './game.styles';

function GamePage() {
  const { isGameOver, isSinglePlayer } = useContext(AppContext);

  return (
    <GamePageContainer>
      <GameHeader />

      <main>
        <GameBoard />

        {
          isSinglePlayer
            ? <GamePlayersSingleplayer />
            : <GamePlayersMultiplayer />
        }

        {
          isGameOver && isSinglePlayer
            ? <GameOverSingleplayer />
            : null
        }

        {
          isGameOver && !isSinglePlayer
            ? <GameOverMultiplayer />
            : null
        }
      </main>

    </GamePageContainer>
  );
}

export default GamePage;

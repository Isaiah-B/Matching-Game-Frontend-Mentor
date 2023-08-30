import { useContext } from 'react';

import Button from '../button/button.component';

import { AppContext } from '../../context/appContext';

import {
  GameOverButtonsContainer,
  GameOverContainer,
  GameOverList,
  GameOverListItemContainer,
  ModalWrapper,
} from './game-over-modal.styles';

interface GameOverListPlayerProps {
  player: string,
  score: number,
  isWinner: boolean,
}

function GameOverListPlayer({ player, score, isWinner }: GameOverListPlayerProps) {
  const playerNumber = player.charAt(6);

  return (
    <GameOverListItemContainer className={isWinner ? 'winner' : ''}>
      <p>Player {playerNumber}{isWinner ? ' (Winner!)' : ''}</p>
      <h2>{score} {score === 1 ? 'Pair' : 'Pairs'}</h2>
    </GameOverListItemContainer>
  );
}

function GameOverMultiplayer() {
  const {
    gameOptions,
    playerScores,
    restartGame,
    handleNewGame,
  } = useContext(AppContext);

  const { numPlayers } = gameOptions;

  let winner = null;
  let isTie = false;

  const scores = Object.values(playerScores);
  const topScore = Math.max(...scores);

  const numWinners = scores.filter((score) => score === topScore);

  const playersList = Object.entries(playerScores);
  playersList.splice(numPlayers, 4 - numPlayers);

  const orderedPlayers = playersList.sort((a, b) => b[1] - a[1]);

  if (numWinners.length > 1) {
    isTie = true;
  } else {
    winner = scores.indexOf(topScore) + 1;
  }

  return (
    <ModalWrapper>
      <GameOverContainer>
        {isTie
          ? <h1>It&apos;s a tie!</h1>
          : <h1>Player {winner} Wins!</h1>}

        <p>Game over! Here are the results...</p>

        <GameOverList>
          {
            orderedPlayers.map((player) => (
              <li key={player[0]}>
                <GameOverListPlayer
                  player={player[0]}
                  score={player[1]}
                  isWinner={player[1] === topScore}
                />
              </li>
            ))
          }
        </GameOverList>

        <GameOverButtonsContainer>
          <Button buttonType="primary" onClick={() => restartGame()}>Restart</Button>
          <Button buttonType="secondary" onClick={() => handleNewGame()}>Setup New Game</Button>
        </GameOverButtonsContainer>
      </GameOverContainer>
    </ModalWrapper>
  );
}

export default GameOverMultiplayer;

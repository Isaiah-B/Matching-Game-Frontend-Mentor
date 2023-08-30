import {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import useScreenWidth from '../../hooks/useScreenWidth';

import { AppContext } from '../../context/appContext';
import { convertSecondsToTime } from '../../utils';

import {
  CurrentTurnText,
  GamePlayersContainer,
  MultiplayerTabContainer,
  SingleplayerTabContainer,
} from './game-players.styles';

function PlayerTab({ playerNumber }: { playerNumber: number }) {
  const { currentPlayer, playerScores } = useContext(AppContext);
  const screenWidth = useScreenWidth();

  const score = Object.values(playerScores)[playerNumber - 1];

  const tabClassName = `player-${playerNumber}${currentPlayer === playerNumber ? ' selected' : ''}`;

  return (
    <MultiplayerTabContainer className={tabClassName}>
      <p>{`${screenWidth > 512 ? 'Player ' : 'P'}`}{playerNumber}</p>
      <span>{score}</span>
    </MultiplayerTabContainer>
  );
}

export function GamePlayersSingleplayer() {
  const {
    isGameOver,
    isPaused,
    singlePlayer,
    setTimer,
  } = useContext(AppContext);

  const { timer, moves } = singlePlayer;

  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!isGameOver) {
      if (!isPaused) {
        intervalRef.current = setInterval(() => {
          setTimer(timer + 1);
        }, 1000);
      }
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isGameOver, timer, isPaused]);

  return (
    <GamePlayersContainer>
      <SingleplayerTabContainer>
        <p>Time</p>
        <span>{convertSecondsToTime(timer)}</span>
      </SingleplayerTabContainer>

      <SingleplayerTabContainer>
        <p>Moves</p>
        <span>{moves}</span>
      </SingleplayerTabContainer>
    </GamePlayersContainer>
  );
}

export function GamePlayersMultiplayer() {
  const [textPos, setTextPos] = useState(0);
  const screenWidth = useScreenWidth();

  const { gameOptions, currentPlayer } = useContext(AppContext);
  const { numPlayers } = gameOptions;

  const currentTurnTextStyle = screenWidth <= 1200 ? { left: textPos } : {};

  // Determine position of 'current turn' text under the current player tab
  useEffect(() => {
    if (screenWidth <= 1200 && screenWidth > 768) {
      const currentPlayerTab = document.querySelector(`.player-${currentPlayer}`);
      const tabPos = currentPlayerTab?.getBoundingClientRect();
      if (tabPos) setTextPos((tabPos.left + tabPos.width / 2) - 40);
    }
  }, [screenWidth, currentPlayer]);

  return (
    <GamePlayersContainer>
      {
        [...Array(numPlayers)].map((player, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <PlayerTab key={index} playerNumber={index + 1} />
        ))
      }

      <CurrentTurnText
        className={`player-${currentPlayer}`}
        numPlayers={numPlayers}
        style={currentTurnTextStyle}
      >
        Current Turn
      </CurrentTurnText>

    </GamePlayersContainer>
  );
}

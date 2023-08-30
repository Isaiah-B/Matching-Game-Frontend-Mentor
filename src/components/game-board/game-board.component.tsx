/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';

import Tile from '../tile/tile.component';

import { AppContext } from '../../context/appContext';

import { GameBoardContainer, Board } from './game-board.styles';

function GameBoard() {
  const { gameOptions, gameTiles } = useContext(AppContext);
  const { gridSize } = gameOptions;

  return (
    <GameBoardContainer className={gridSize === 'large' ? 'large' : ''}>
      <Board>
        {
          gameTiles.map((val, index) => (
            <Tile
              key={index}
              index={index}
              value={val}
            />
          ))
        }
      </Board>
    </GameBoardContainer>
  );
}

export default GameBoard;

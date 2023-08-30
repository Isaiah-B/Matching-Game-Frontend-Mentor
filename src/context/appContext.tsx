import { useState, createContext, useMemo } from 'react';

import { shuffleArray } from './helpers';

interface AppContextType {
  gameOptions: {
    theme: 'numbers' | 'icons',
    numPlayers: number,
    gridSize: 'small' | 'large',
  },
  playerScores: {
    player1: number,
    player2: number,
    player3: number,
    player4: number,
  },
  currentPlayer: number | null,

  singlePlayer: {
    timer: number,
    moves: number,
  },

  gameTiles: number[],
  selectedTiles: number[],
  matchedTiles: number[],

  isRunning: boolean,
  isGameOver: boolean,
  isSinglePlayer: boolean,
  isPaused: boolean,

  setTimer: React.Dispatch<React.SetStateAction<number>>,
  setMoves: React.Dispatch<React.SetStateAction<number>>,

  setTheme: React.Dispatch<React.SetStateAction<'numbers' | 'icons'>>,
  setNumPlayers: React.Dispatch<React.SetStateAction<number>>,
  setGridSize: React.Dispatch<React.SetStateAction<'small' | 'large'>>,

  setGameTiles: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedTiles: React.Dispatch<React.SetStateAction<number[]>>,
  setMatchedTiles: React.Dispatch<React.SetStateAction<number[]>>,
  setCurrentPlayer: React.Dispatch<React.SetStateAction<number | null>>,

  setIsSinglePlayer: React.Dispatch<React.SetStateAction<boolean>>,
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>,
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>,

  selectTile: (index: number) => void,
  createBoard: () => void,
  shuffleArray: (arr: number[]) => number[] | null,
  restartGame: () => void,
  handleNewGame: () => void,
}

const defaultContext: AppContextType = {
  gameOptions: {
    theme: 'numbers',
    numPlayers: 1,
    gridSize: 'small',
  },
  playerScores: {
    player1: 0,
    player2: 0,
    player3: 0,
    player4: 0,
  },
  currentPlayer: null,

  singlePlayer: {
    timer: 0,
    moves: 0,
  },

  gameTiles: [],
  selectedTiles: [],
  matchedTiles: [],

  isSinglePlayer: false,
  isRunning: false,
  isGameOver: false,
  isPaused: false,

  setTimer: () => {},
  setMoves: () => {},

  setTheme: () => {},
  setNumPlayers: () => {},
  setGridSize: () => {},

  setGameTiles: () => {},
  setSelectedTiles: () => {},
  setMatchedTiles: () => {},

  setCurrentPlayer: () => {},

  setIsSinglePlayer: () => {},
  setIsRunning: () => {},
  setIsPaused: () => {},

  selectTile: () => {},
  createBoard: () => {},
  shuffleArray: () => [],
  restartGame: () => {},
  handleNewGame: () => {},
};

export const AppContext = createContext(defaultContext);

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(defaultContext.gameOptions.theme);
  const [numPlayers, setNumPlayers] = useState(defaultContext.gameOptions.numPlayers);
  const [gridSize, setGridSize] = useState(defaultContext.gameOptions.gridSize);

  const [timer, setTimer] = useState(defaultContext.singlePlayer.timer);
  const [moves, setMoves] = useState(defaultContext.singlePlayer.moves);

  const [isSinglePlayer, setIsSinglePlayer] = useState(defaultContext.isSinglePlayer);
  const [isRunning, setIsRunning] = useState(defaultContext.isRunning);
  const [isGameOver, setIsGameOver] = useState(defaultContext.isGameOver);
  const [isPaused, setIsPaused] = useState(defaultContext.isPaused);

  const [gameTiles, setGameTiles] = useState(defaultContext.gameTiles);
  const [selectedTiles, setSelectedTiles] = useState(defaultContext.selectedTiles);
  const [matchedTiles, setMatchedTiles] = useState(defaultContext.matchedTiles);

  const [playerScores, setPlayerScores] = useState(defaultContext.playerScores);
  const [currentPlayer, setCurrentPlayer] = useState(defaultContext.currentPlayer);

  const gameOptions = {
    theme,
    numPlayers,
    gridSize,
  };

  const singlePlayer = {
    moves,
    timer,
  };

  function createBoard() {
    const vals: number[] = [];
    let numTiles = null;

    if (gridSize === 'small') numTiles = 16;
    else if (gridSize === 'large') numTiles = 36;
    else throw new Error('Invalid grid size');

    // Create array of size numTiles / 2 with each value being unique and occuring twice
    for (let i = 0; i < (Math.floor(numTiles / 2)); i += 1) {
      let num = Math.floor(Math.random() * (numTiles / 2));

      while (vals.includes(num)) {
        num = Math.floor(Math.random() * (numTiles / 2));
      }

      vals.push(num, num);
    }

    const shuffled = shuffleArray(vals);

    if (shuffled) {
      setGameTiles(shuffled);
    } else {
      throw new Error('There was a problem creating the board');
    }
  }

  function restartGame() {
    setMoves(0);
    setTimer(0);
    setGameTiles([]);
    setSelectedTiles([]);
    setMatchedTiles([]);
    setCurrentPlayer(1);
    setPlayerScores(defaultContext.playerScores);
    setIsSinglePlayer(numPlayers === 1);
    setIsGameOver(false);
    createBoard();
  }

  function handleNewGame() {
    setIsRunning(false);
    restartGame();
  }

  function incrementPlayer() {
    if (!isSinglePlayer && currentPlayer) {
      if (currentPlayer === numPlayers - 1) {
        setCurrentPlayer(numPlayers);
      } else {
        setCurrentPlayer((currentPlayer + 1) % numPlayers);
      }
    }
  }

  function updatePlayerScores() {
    if (currentPlayer) {
      const playerIndex = `player${currentPlayer}`;
      const updatedPlayerScores = {
        ...playerScores,
        [playerIndex]: playerScores[playerIndex as keyof AppContextType['playerScores']] + 1,
      };

      setPlayerScores(updatedPlayerScores);
    }
  }

  function selectTile(index: number) {
    // Prevent more than two tiles from being selected at a time
    if (selectedTiles.length === 2) return;

    const selectedTilesCopy = [...selectedTiles];

    if (selectedTilesCopy.includes(index)) return;

    setSelectedTiles(selectedTiles.concat(index));
    selectedTilesCopy.push(index);

    // Compare tiles. If they are not the same unselect them after 1 second.
    // If they match, add a point to the current player.
    if (selectedTilesCopy.length > 1) {
      // Tiles do not match
      if (gameTiles[selectedTilesCopy[0]] !== gameTiles[selectedTilesCopy[1]]) {
        setTimeout(() => {
          setSelectedTiles([]);
          incrementPlayer();
        }, 1000);
      } else {
        // Tiles match
        setMatchedTiles(matchedTiles.concat(selectedTilesCopy[0], selectedTilesCopy[1]));

        updatePlayerScores();

        setTimeout(() => {
          setSelectedTiles([]);
        }, 1000);

        if (matchedTiles.length === gameTiles.length - 2) {
          setIsGameOver(true);
        }
      }

      if (isSinglePlayer) setMoves(moves + 1);
    }
  }

  const value = useMemo(() => (
    {
      gameOptions,
      singlePlayer,
      playerScores,
      currentPlayer,
      gameTiles,
      selectedTiles,
      matchedTiles,
      isSinglePlayer,
      isRunning,
      isGameOver,
      isPaused,
      setTimer,
      setMoves,
      setTheme,
      setNumPlayers,
      setGridSize,
      setGameTiles,
      setSelectedTiles,
      setMatchedTiles,
      setCurrentPlayer,
      setIsRunning,
      setIsGameOver,
      setIsSinglePlayer,
      setIsPaused,
      selectTile,
      createBoard,
      shuffleArray,
      restartGame,
      handleNewGame,
    }
  ), [
    theme,
    numPlayers,
    gridSize,
    playerScores,
    currentPlayer,
    gameTiles,
    selectedTiles,
    matchedTiles,
    timer,
    moves,
    isRunning,
    isGameOver,
    isSinglePlayer,
    isPaused,
  ]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;

import { useContext } from 'react';

import { AppContext } from '../../context/appContext';

import { ICONS_LIST } from '../../utils';

import { Icon, TileContainer } from './tile.styles';

function Tile({ value, index }: { value: number, index: number }) {
  const {
    gameOptions,
    selectTile,
    selectedTiles,
    matchedTiles,
  } = useContext(AppContext);

  const { theme } = gameOptions;

  const isSelected = selectedTiles.includes(index);
  const isMatched = matchedTiles.includes(index);

  const tileClass = [];
  if (isSelected) tileClass.push('selected');
  if (isMatched) tileClass.push('matched');

  const onClickTile = () => {
    if (isMatched) return;
    selectTile(index);
  };

  return (
    <TileContainer
      className={tileClass.join(' ')}
      onClick={() => onClickTile()}
    >
      {
        theme === 'numbers'
          ? <span>{isSelected || isMatched ? value : ''}</span>
          : (
            <div>
              {
                isSelected || isMatched
                  ? <Icon icon={ICONS_LIST[value]} />
                  : null
              }
            </div>
          )
      }
    </TileContainer>
  );
}

export default Tile;

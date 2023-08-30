import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export const convertSecondsToTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const ICONS_LIST = [
  icon({ name: 'car' }),
  icon({ name: 'heart' }),
  icon({ name: 'flask' }),
  icon({ name: 'cube' }),
  icon({ name: 'bug-slash' }),
  icon({ name: 'gear' }),
  icon({ name: 'mug-saucer' }),
  icon({ name: 'bone' }),
  icon({ name: 'joint' }),
  icon({ name: 'gamepad' }),
  icon({ name: 'ghost' }),
  icon({ name: 'scroll' }),
  icon({ name: 'hat-wizard' }),
  icon({ name: 'puzzle-piece' }),
  icon({ name: 'shield-halved' }),
  icon({ name: 'microchip' }),
  icon({ name: 'user-secret' }),
  icon({ name: 'terminal' }),
];

import type { Payload } from '@src/context';

export const getFieldPosition = (fieldI: number): Payload['fieldPosition'] => {
  if (fieldI === 0) return 'tl';
  if (fieldI === 7) return 'tr';
  if (fieldI === 56) return 'bl';
  if (fieldI === 63) return 'br';

  if (fieldI < 8) return 'top';
  if (fieldI > 56) return 'bottom';

  if (fieldI % 8 === 0) return 'left';
  if ((fieldI + 1) % 8 === 0) return 'right';

  return 'middle';
};

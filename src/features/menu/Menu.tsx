import React, { FC } from 'react';

import styles from './menu.module.scss';

export const Menu: FC = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <a href={`/tictac`}>Tic Tac Toe</a>
      </li>

      <li>
        <a href={`/mobxgame`}>MobX Game</a>
      </li>
    </ul>
  );
};

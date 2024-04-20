import React, { FC } from 'react';
import { Cell } from '@src/features/cell';
import styles from './field.module.scss';

const FIELD_SRC = [...new Array(8 * 8)].map((_, i) => i);

export const Field: FC = () => {
  return (
    <div className={styles.field}>
      {FIELD_SRC.map((fieldIndex) => (
        <Cell key={fieldIndex} fieldIndex={fieldIndex} />
      ))}
    </div>
  );
};

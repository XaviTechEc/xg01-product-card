import React from 'react';
import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export type ProductButtonsProps = {
  className?: string;
};

export const ProductButtons = ({ className }: ProductButtonsProps) => {
  // TODO: Extraer maxCount
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  // TODO: isMaxReached = useCallback, [counter, maxCount]
  // TRUE si counter === maxCount ELSE FALSE

  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [
    counter,
    maxCount,
  ]);

  const handleAdd = () => {
    if (isMaxReached()) return;
    increaseBy(1);
  };

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        disabled={isMaxReached()}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={handleAdd}
      >
        +
      </button>
    </div>
  );
};

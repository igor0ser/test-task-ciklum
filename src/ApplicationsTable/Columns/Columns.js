import React, { useReducer, useMemo } from 'react';
import { Application } from '../Application/Application';
import {
  COLUMN_KEYS,
  initColumnsState,
  columnsReducer,
  createMoveLeft,
  createMoveRight,
} from './columnsDuck';
import styles from './Columns.module.css';

export const Columns = ({ initialApplications, filterFn }) => {
  const [applicationColumns, dispatchColumnChange] = useReducer(
    columnsReducer,
    initColumnsState(initialApplications),
  );

  const { moveLeft, moveRight } = useMemo(() => ({
    moveLeft: createMoveLeft(dispatchColumnChange),
    moveRight: createMoveRight(dispatchColumnChange),
  }), []);

  return (
    <section className={styles.columns}>
      {COLUMN_KEYS.map((columnKey, index) => (
        <div key={columnKey}>
          <h3 className={styles.header}>{columnKey}</h3>
          {applicationColumns[columnKey].filter(filterFn).map(application => (
            <Application
              key={application.id.value}
              data={application}
              moveLeft={index === 0 ? undefined : moveLeft }
              moveRight={index === COLUMN_KEYS.length - 1 ? undefined : moveRight}
              columnIndex={index}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

import React from 'react';
import styles from './index.module.scss';

const DayDot = ({ record, small }) => {
  const size = small ? 5 : 6;
  const wrapperHeight = small ? 6 : 8;

  if (!record) return <div style={{ height: `${wrapperHeight}px` }} />;

  return (
    <div className={styles.wrapper} style={{ height: `${wrapperHeight}px` }}>
      <div
        className={`${styles.dot} ${record.done ? styles.done : ''}`}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </div>
  );
};

export default DayDot;

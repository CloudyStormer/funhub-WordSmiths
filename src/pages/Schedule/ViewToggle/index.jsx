import React from 'react';
import styles from './index.module.scss';

const options = [
  { key: 'day',   label: '日' },
  { key: 'week',  label: '周' },
  { key: 'month', label: '月' },
];

const ViewToggle = ({ view, onChange }) => (
  <div className={styles.wrapper}>
    {options.map((o) => (
      <button
        key={o.key}
        className={`${styles.option} ${view === o.key ? styles.active : ''}`}
        onClick={() => onChange(o.key)}
      >
        {o.label}
      </button>
    ))}
  </div>
);

export default ViewToggle;

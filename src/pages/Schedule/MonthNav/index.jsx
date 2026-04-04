import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './index.module.scss';

const MonthNav = ({ year, month, onPrev, onNext }) => (
  <div className={styles.nav}>
    <button className={styles.navBtn} onClick={onPrev}>
      <ChevronLeft size={16} />
    </button>
    <span className={styles.navTitle}>{year}年{month + 1}月</span>
    <button className={styles.navBtn} onClick={onNext}>
      <ChevronRight size={16} />
    </button>
  </div>
);

export default MonthNav;

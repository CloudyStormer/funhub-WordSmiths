import React from 'react';
import { Flame, Clock, BookOpen } from 'lucide-react';
import styles from './index.module.scss';

const DaySummary = ({ record }) => {
  if (!record || !record.done) return null;

  return (
    <div className={styles.summary}>
      <div className={styles.item}>
        <Flame size={14} className={styles.fireIcon} />
        <span className={styles.label}>已打卡</span>
      </div>
      <div className={styles.item}>
        <Clock size={13} className={styles.purpleIcon} />
        <span className={styles.value}>{record.minutes} 分钟</span>
      </div>
      <div className={styles.item}>
        <BookOpen size={13} className={styles.purpleIcon} />
        <span className={styles.value}>{record.tasks} 个任务</span>
      </div>
    </div>
  );
};

export default DaySummary;

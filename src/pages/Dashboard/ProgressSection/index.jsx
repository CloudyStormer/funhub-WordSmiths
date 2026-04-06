import React from 'react';
import { Play } from 'lucide-react';
import styles from './index.module.scss';

const ProgressSection = ({ days = 12, progress = 85, onOpenModal }) => {
  return (
    <section data-cmp="ProgressSection" className={styles.section}>
      <div className={styles.greetingBox}>
        <div className={styles.greetingRow}>
          <h1 className={styles.greetingTitle}>嗨, Alex!</h1>
          <div className={styles.proBadge}>
            <span className={styles.pulseDot}></span>
            成人职场版 PRO
          </div>
        </div>
        <p className={styles.streakText}>
          已连续学习 <span className={styles.streakHighlight}>{days}</span> 天
        </p>
      </div>
      <div className={styles.progressCard}>
        <div className={styles.progressHeader}>
          <span className={styles.progressLabel}>今日学习进度</span>
          <span className={styles.progressValue}>{progress}%</span>
        </div>
        <div className={styles.progressBarWrapper}>
          <div
            className={styles.progressBarFill}
            style={{ '--progress': `${progress}%` }}
          />
        </div>
        <button className={styles.primaryBtn} onClick={onOpenModal}>
          <Play size={18} fill="currentColor" />
          快速开始学习
        </button>
      </div>
    </section>
  );
};

export default ProgressSection;

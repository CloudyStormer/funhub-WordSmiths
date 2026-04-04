import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import styles from './index.module.scss';

const TaskCard = ({ item }) => (
  <div className={styles.card}>
    <div className={styles.timeCol}>
      <span className={styles.timeText}>{item.time}</span>
      <div className={styles.timeLine} />
    </div>

    <div className={styles.content}>
      <p className={`${styles.taskTitle} ${item.done ? styles.done : ''}`}>
        {item.title}
      </p>
      <div className={styles.metaRow}>
        <Clock size={11} className={styles.metaIcon} />
        <span className={styles.duration}>{item.duration}</span>
        <span className={`${styles.tag} ${styles[item.tagClass]}`}>{item.tag}</span>
      </div>
    </div>

    <div className={styles.status}>
      {item.done
        ? <CheckCircle size={18} className={styles.checkIcon} />
        : <div className={styles.emptyCircle} />
      }
    </div>
  </div>
);

export default TaskCard;

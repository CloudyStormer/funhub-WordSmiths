import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DaySummary from '../DaySummary';
import TaskCard from '../TaskCard';
import { fmt, today, getRecord, scheduleItems, weekDayLabels } from '../scheduleData';
import styles from './index.module.scss';

const todayStr = fmt(today);

const WeekView = ({ selectedDate, onDateChange }) => {
  const dayOfWeek = selectedDate.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const weekStart = new Date(selectedDate);
  weekStart.setDate(selectedDate.getDate() + mondayOffset);

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  const goPrev = () => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() - 7);
    onDateChange(d);
  };
  const goNext = () => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + 7);
    onDateChange(d);
  };

  const selectedStr = fmt(selectedDate);
  const weekLabel = `${weekDates[0].getMonth() + 1}月${weekDates[0].getDate()}日 - ${weekDates[6].getMonth() + 1}月${weekDates[6].getDate()}日`;

  const doneCount = weekDates.filter((d) => getRecord(fmt(d))?.done).length;
  const totalMinutes = weekDates.reduce((sum, d) => sum + (getRecord(fmt(d))?.minutes || 0), 0);

  return (
    <>
      <div className={styles.weekNav}>
        <button className={styles.navBtn} onClick={goPrev}>
          <ChevronLeft size={16} />
        </button>
        <span className={styles.navLabel}>{weekLabel}</span>
        <button className={styles.navBtn} onClick={goNext}>
          <ChevronRight size={16} />
        </button>
      </div>

      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <p className={styles.statValue}>{doneCount}/7</p>
          <p className={styles.statLabel}>打卡天数</p>
        </div>
        <div className={styles.statsDivider} />
        <div className={styles.statItem}>
          <p className={styles.statValue}>{totalMinutes}</p>
          <p className={styles.statLabel}>学习分钟</p>
        </div>
        <div className={styles.statsDivider} />
        <div className={styles.statItem}>
          <p className={styles.statValue}>
            {doneCount > 0 ? Math.round((doneCount / 7) * 100) : 0}%
          </p>
          <p className={styles.statLabel}>完成率</p>
        </div>
      </div>

      <div className={styles.dayColumns}>
        <div className={styles.daysRow}>
          {weekDates.map((d, i) => {
            const dStr = fmt(d);
            const isSelected = dStr === selectedStr;
            const isToday = dStr === todayStr;
            const rec = getRecord(dStr);
            const barHeight = rec?.done ? Math.max(20, (rec.minutes / 60) * 60) : 0;
            return (
              <button
                key={i}
                className={styles.dayCol}
                onClick={() => onDateChange(new Date(d))}
              >
                <span className={styles.dayLabel}>{weekDayLabels[i]}</span>
                <div className={styles.barContainer}>
                  <div
                    className={`${styles.bar} ${
                      rec?.done
                        ? isSelected ? styles.barSelected : styles.barDone
                        : styles.barEmpty
                    }`}
                    style={rec?.done ? { '--bar-height': `${barHeight}px` } : undefined}
                  />
                </div>
                <div
                  className={`${styles.dateCircle} ${isSelected ? styles.selected : isToday ? styles.today : ''}`}
                >
                  {d.getDate()}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.tasksArea}>
        <DaySummary record={getRecord(selectedStr)} />
        <p className={styles.tasksHeading}>
          {selectedDate.getMonth() + 1}月{selectedDate.getDate()}日课程安排
        </p>
        <div className={styles.taskList}>
          {scheduleItems.slice(0, 3).map((item, i) => <TaskCard key={i} item={item} />)}
        </div>
      </div>
    </>
  );
};

export default WeekView;

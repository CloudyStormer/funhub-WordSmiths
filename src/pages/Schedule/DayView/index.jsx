import React from 'react';
import MonthNav from '../MonthNav';
import DayDot from '../DayDot';
import DaySummary from '../DaySummary';
import TaskCard from '../TaskCard';
import { fmt, today, getRecord, scheduleItems, weekDayLabels } from '../scheduleData';
import styles from './index.module.scss';

const todayStr = fmt(today);

const DayView = ({ selectedDate, onDateChange }) => {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  const goPrev = () => {
    const d = new Date(selectedDate);
    d.setMonth(month - 1);
    onDateChange(d);
  };
  const goNext = () => {
    const d = new Date(selectedDate);
    d.setMonth(month + 1);
    onDateChange(d);
  };

  const dayOfWeek = selectedDate.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const weekStart = new Date(selectedDate);
  weekStart.setDate(selectedDate.getDate() + mondayOffset);

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  const selectedStr = fmt(selectedDate);
  const record = getRecord(selectedStr);

  return (
    <>
      <MonthNav year={year} month={month} onPrev={goPrev} onNext={goNext} />

      <div className={styles.weekStrip}>
        {weekDates.map((d, i) => {
          const dStr = fmt(d);
          const isSelected = dStr === selectedStr;
          const isToday = dStr === todayStr;
          const rec = getRecord(dStr);
          return (
            <button
              key={i}
              className={styles.dayBtn}
              onClick={() => onDateChange(new Date(d))}
            >
              <span className={styles.dayLabel}>{weekDayLabels[i]}</span>
              <div
                className={`${styles.dateCircle} ${isSelected ? styles.selected : isToday ? styles.today : ''}`}
              >
                {d.getDate()}
              </div>
              <DayDot record={rec} small />
            </button>
          );
        })}
      </div>

      <DaySummary record={record} />

      <div className={styles.tasksArea}>
        <p className={styles.tasksHeading}>
          {month + 1}月{selectedDate.getDate()}日 · {scheduleItems.length} 个安排
        </p>
        <div className={styles.taskList}>
          {scheduleItems.map((item, i) => <TaskCard key={i} item={item} />)}
        </div>
      </div>
    </>
  );
};

export default DayView;

import React from 'react';
import MonthNav from '../MonthNav';
import DaySummary from '../DaySummary';
import TaskCard from '../TaskCard';
import { fmt, today, getRecord, scheduleItems, weekDayLabels } from '../scheduleData';
import styles from './index.module.scss';

const todayStr = fmt(today);

const MonthView = ({ selectedDate, onDateChange }) => {
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

  const firstDay = new Date(year, month, 1);
  const firstDayWeek = firstDay.getDay() === 0 ? 7 : firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = Math.ceil((firstDayWeek - 1 + daysInMonth) / 7) * 7;

  const cells = [];
  for (let i = 0; i < totalCells; i++) {
    const dayNum = i - (firstDayWeek - 1) + 1;
    cells.push(dayNum < 1 || dayNum > daysInMonth ? null : new Date(year, month, dayNum));
  }

  const selectedStr = fmt(selectedDate);
  const monthDates = Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));
  const doneDays = monthDates.filter((d) => getRecord(fmt(d))?.done).length;
  const totalMinutes = monthDates.reduce((sum, d) => sum + (getRecord(fmt(d))?.minutes || 0), 0);

  return (
    <>
      <MonthNav year={year} month={month} onPrev={goPrev} onNext={goNext} />

      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <p className={styles.statValue}>{doneDays}</p>
          <p className={styles.statLabel}>打卡天数</p>
        </div>
        <div className={styles.statsDivider} />
        <div className={styles.statItem}>
          <p className={styles.statValue}>{totalMinutes}</p>
          <p className={styles.statLabel}>总分钟数</p>
        </div>
        <div className={styles.statsDivider} />
        <div className={styles.statItem}>
          <p className={styles.statValue}>
            {doneDays > 0 ? Math.round((doneDays / daysInMonth) * 100) : 0}%
          </p>
          <p className={styles.statLabel}>月完成率</p>
        </div>
      </div>

      <div className={styles.weekHeader}>
        {weekDayLabels.map((d) => (
          <div key={d} className={styles.weekHeaderCell}>{d}</div>
        ))}
      </div>

      <div className={styles.grid}>
        {Array.from({ length: cells.length / 7 }, (_, row) => (
          <div key={row} className={styles.gridRow}>
            {cells.slice(row * 7, row * 7 + 7).map((d, col) => {
              if (!d) return <div key={col} className={styles.gridCellEmpty} />;
              const dStr = fmt(d);
              const isSelected = dStr === selectedStr;
              const isToday = dStr === todayStr;
              const rec = getRecord(dStr);
              const isFuture = d > today;
              return (
                <button
                  key={col}
                  className={styles.gridCell}
                  onClick={() => onDateChange(new Date(d))}
                >
                  <div
                    className={`${styles.dateCircle} ${
                      isSelected ? styles.selected
                      : isToday   ? styles.today
                      : rec?.done ? styles.done
                      : isFuture  ? styles.future
                      : ''
                    }`}
                  >
                    {d.getDate()}
                  </div>
                  <div className={styles.dotArea}>
                    {rec?.done && (
                      <div className={`${styles.dot} ${isSelected ? styles.selectedDot : ''}`} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className={styles.tasksArea}>
        <DaySummary record={getRecord(selectedStr)} />
        <p className={styles.tasksHeading}>
          {selectedDate.getMonth() + 1}月{selectedDate.getDate()}日课程安排
        </p>
        <div className={styles.taskList}>
          {scheduleItems.slice(0, 2).map((item, i) => <TaskCard key={i} item={item} />)}
        </div>
      </div>
    </>
  );
};

export default MonthView;

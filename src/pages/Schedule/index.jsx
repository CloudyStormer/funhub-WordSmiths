import React, { useState } from 'react';
import ViewToggle from './ViewToggle';
import DayView from './DayView';
import WeekView from './WeekView';
import MonthView from './MonthView';
import styles from './index.module.scss';

const Schedule = () => {
  const [view, setView] = useState('day');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderView = () => {
    switch (view) {
      case 'week':
        return <WeekView selectedDate={selectedDate} onDateChange={setSelectedDate} />;
      case 'month':
        return <MonthView selectedDate={selectedDate} onDateChange={setSelectedDate} />;
      default:
        return <DayView selectedDate={selectedDate} onDateChange={setSelectedDate} />;
    }
  };

  return (
    <div className={styles.schedulePage}>
      <div className={styles.pageHeader}>
        <div className={styles.titleBlock}>
          <h2 className={styles.pageTitle}>学习日程</h2>
          <p className={styles.pageSubtitle}>追踪你的每日打卡记录</p>
        </div>
      </div>
      <div className={styles.toggleRow}>
        <ViewToggle view={view} onChange={setView} />
      </div>
      <div className={styles.content}>
        {renderView()}
      </div>
    </div>
  );
};

export default Schedule;

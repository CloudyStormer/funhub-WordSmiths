import React from 'react';
import { CalendarRange, LayoutGrid, BookOpen } from 'lucide-react';
import styles from './index.module.scss';

const tabs = [
  { id: 'schedule',      label: '日程', icon: CalendarRange },
  { id: 'dashboard',        label: '看板', icon: LayoutGrid },
  { id: 'retrospective', label: '复盘', icon: BookOpen },
];

const BottomTabBar = ({ activeTab, onTabChange, onOpenModal }) => {
  return (
    <nav className={styles.tabBar}>
      {tabs.map(({ id, label, icon: Icon }) => {
        const isActive = activeTab === id;
        return (
          <button
            key={id}
            className={`${styles.tabItem} ${isActive ? styles.active : ''}`}
            onClick={() => {
              onTabChange(id);
              // onOpenModal();
            }}
          >
            <span className={styles.iconWrap}>
              <Icon size={isActive ? 28 : 22} />
            </span>
            <span className={styles.tabLabel}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomTabBar;

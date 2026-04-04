import React, { useState } from 'react';
import Header from '../../components/Header';
import BottomTabBar from '../../components/BottomTabBar';
import RetrospectivePage from '../Retrospective';
import Dashboard from '../Dashboard';
import SchedulePage from '../Schedule';
import styles from './index.module.scss';

const Frame = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'schedule':
        return <SchedulePage />;
      case 'dashboard':
        return <Dashboard />;
      case 'retrospective':
        return <RetrospectivePage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.mobileWrapper}>
        <Header />
        <main className={styles.mainContent}>
          {renderContent()}
        </main>
        <BottomTabBar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default Frame;

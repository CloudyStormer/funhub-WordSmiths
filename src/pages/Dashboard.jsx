import React from 'react';
import Header from '../components/Header';
import ProgressSection from '../components/ProgressSection';
import ScenarioSection from '../components/ScenarioSection';
import MemorySection from '../components/MemorySection';
import ReviewSection from '../components/ReviewSection';
import styles from '../index.module.css';

const Dashboard = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.mobileWrapper}>
        <Header />
        <main className={styles.mainContent}>
          <ProgressSection />
          <ScenarioSection />
          <MemorySection />
          <ReviewSection />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
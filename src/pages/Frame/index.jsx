import React, { useState } from 'react';
import Header from '../../components/Header';
import BottomTabBar from '../../components/BottomTabBar';
import RetrospectivePage from '../Retrospective';
import Dashboard from '../Dashboard';
import SchedulePage from '../Schedule';
import VocabPickerModal from '../Dashboard/VocabPickerModal';
import styles from './index.module.scss';

const Frame = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [modalVisible, setModalVisible] = useState(false);
  const [activeVocab, setActiveVocab] = useState('office');

  const openModal = () => setModalVisible(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'schedule':
        return <SchedulePage />;
      case 'dashboard':
        return <Dashboard onOpenModal={openModal} />;
      case 'retrospective':
        return <RetrospectivePage />;
      default:
        return <Dashboard onOpenModal={openModal} />;
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.mobileWrapper}>
        <Header activeVocab={activeVocab} onOpenModal={openModal} />
        <main className={styles.mainContent}>
          {renderContent()}
        </main>
        <BottomTabBar activeTab={activeTab} onTabChange={setActiveTab} />
        <VocabPickerModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSelect={(id) => { setActiveVocab(id); setModalVisible(false); }}
        />
      </div>
    </div>
  );
};

export default Frame;

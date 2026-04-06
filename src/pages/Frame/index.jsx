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
  const [activeVocab, setActiveVocab] = useState(null);
  const [pendingTab, setPendingTab] = useState(null);

  // 只有 Header 用这个 —— 始终弹窗（重新选词库）
  const openModalAlways = () => setModalVisible(true);

  // 其他触发点用这个 —— 已选词库则直接执行，不弹窗
  const openModalIfNoVocab = (onConfirmed) => {
    if (activeVocab) {
      onConfirmed?.();
    } else {
      setModalVisible(true);
    }
  };

  // Tab 切换：未选词库先弹窗并记录目标 tab
  const handleTabChange = (id) => {
    if (activeVocab) {
      setActiveTab(id);
    } else {
      setPendingTab(id);
      setModalVisible(true);
    }
  };

  const handleVocabSelect = (id) => {
    setActiveVocab(id);
    setModalVisible(false);
    if (pendingTab) {
      setActiveTab(pendingTab);
      setPendingTab(null);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'schedule':      return <SchedulePage />;
      case 'retrospective': return <RetrospectivePage />;
      default:
        return (
          <Dashboard
            onOpenModal={() => openModalIfNoVocab()}
          />
        );
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.mobileWrapper}>
        <Header activeVocab={activeVocab} onOpenModal={openModalAlways} />
        <main className={styles.mainContent}>
          {renderContent()}
        </main>
        <BottomTabBar activeTab={activeTab} onTabChange={handleTabChange} />
        <VocabPickerModal
          visible={modalVisible}
          activeVocab={activeVocab}
          onClose={() => { setModalVisible(false); setPendingTab(null); }}
          onSelect={handleVocabSelect}
        />
      </div>
    </div>
  );
};

export default Frame;

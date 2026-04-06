import React from 'react';
import { Search, Glasses, Briefcase, Plane, BookOpen, ChevronDown } from 'lucide-react';
import styles from './index.module.scss';

const vocabMap = {
  office:   { label: '职场通用词库', icon: Briefcase, colorClass: 'purple' },
  travel:   { label: '商务差旅词库', icon: Plane,     colorClass: 'green'  },
  contract: { label: '商务谈判词库', icon: BookOpen,  colorClass: 'orange' },
};

const Header = ({ activeVocab = 'office', onOpenModal }) => {
  const vocab = vocabMap[activeVocab] || vocabMap.office;
  const VocabIcon = vocab.icon;

  return (
    <header data-cmp="Header" className={styles.header}>
      <div className={styles.headerLeft}>
        <button className={styles.iconBtn}><Search size={20} /></button>
        <button className={styles.iconBtn}><Glasses size={22} /></button>
      </div>

      {/* 中央词库选择器 */}
      <button
        className={`${styles.vocabPill} ${styles[vocab.colorClass]}`}
        onClick={onOpenModal}
      >
        <VocabIcon size={13} />
        <span className={styles.vocabLabel}>{vocab.label}</span>
        <ChevronDown size={12} className={styles.vocabChevron} />
      </button>

      <div className={styles.headerRight}>
        <div className={styles.avatarWrapper}>
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=f8fafc"
            alt="User Avatar"
            className={styles.avatarImg}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

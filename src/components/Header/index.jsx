import React from 'react';
import { Search, Glasses, Briefcase, Plane, BookOpen, Globe, ChevronDown, Users, Presentation, UserCheck, BarChart2, BookMarked } from 'lucide-react';
import styles from './index.module.scss';

const vocabMap = {
  office:   { label: '职场通用词库',   icon: Briefcase,    colorClass: 'purple' },
  travel:   { label: '商务差旅词库',   icon: Plane,        colorClass: 'green'  },
  contract: { label: '商务谈判词库',   icon: BookOpen,     colorClass: 'orange' },
  remote:   { label: '跨文化协作词库', icon: Globe,        colorClass: 'blue'   },
  leader:   { label: '领导力管理词库', icon: Users,        colorClass: 'red'    },
  present:  { label: '演讲表达词库',   icon: Presentation, colorClass: 'yellow' },
  hr:       { label: 'HR招聘词库',     icon: UserCheck,    colorClass: 'teal'   },
  finance:  { label: '财务数据词库',   icon: BarChart2,    colorClass: 'indigo' },
};

const Header = ({ activeVocab = null, onOpenModal }) => {
  const vocab = activeVocab ? vocabMap[activeVocab] : null;

  return (
    <header data-cmp="Header" className={styles.header}>
      <div className={styles.headerLeft}>
        <button className={styles.iconBtn}><Search size={20} /></button>
        <button className={styles.iconBtn}><Glasses size={22} /></button>
      </div>

      {/* 中央词库选择器 */}
      <button
        className={`${styles.vocabPill} ${vocab ? styles[vocab.colorClass] : styles.unselected}`}
        onClick={onOpenModal}
      >
        {vocab
          ? <vocab.icon size={13} />
          : <BookMarked size={13} />
        }
        <span className={styles.vocabLabel}>
          {vocab ? vocab.label : '选择词库'}
        </span>
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

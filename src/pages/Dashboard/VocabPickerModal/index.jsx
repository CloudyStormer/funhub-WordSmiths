import React, { useState, useEffect } from 'react';
import {
  X, Briefcase, Plane, BookOpen, Globe, ChevronRight,
  Sparkles, ArrowLeft, Users, Presentation, UserCheck, BarChart2, Check,
} from 'lucide-react';
import styles from './index.module.scss';

const coreOptions = [
  {
    id: 'office',
    icon: Briefcase,
    colorClass: 'purple',
    title: '我主要在办公室沟通',
    subtitle: '（会议、邮件、日常汇报）',
    tag: '职场通用核心词库',
  },
  {
    id: 'travel',
    icon: Plane,
    colorClass: 'green',
    title: '我经常短期出差/见客户',
    subtitle: '（机场、酒店、商务拜访）',
    tag: '商务差旅应急词库',
  },
  {
    id: 'contract',
    icon: BookOpen,
    colorClass: 'orange',
    title: '我需要处理合同/谈判',
    subtitle: '（法律条款、谈判技巧）',
    tag: '商务谈判精英词库',
  },
  {
    id: 'remote',
    icon: Globe,
    colorClass: 'blue',
    title: '我需要跨文化/远程协作',
    subtitle: '（视频会议、全球团队沟通）',
    tag: '跨文化远程协作词库',
  },
];

const extraOptions = [
  {
    id: 'leader',
    icon: Users,
    colorClass: 'red',
    title: '我是团队管理者',
    subtitle: '（绩效沟通、激励团队、1-on-1）',
    tag: '领导力管理词库',
  },
  {
    id: 'present',
    icon: Presentation,
    colorClass: 'yellow',
    title: '我需要演讲/公众表达',
    subtitle: '（路演、TED式演讲、年会分享）',
    tag: '演讲表达词库',
  },
  {
    id: 'hr',
    icon: UserCheck,
    colorClass: 'teal',
    title: '我从事 HR / 招聘',
    subtitle: '（面试、入职、薪资谈判）',
    tag: 'HR 招聘面试词库',
  },
  {
    id: 'finance',
    icon: BarChart2,
    colorClass: 'indigo',
    title: '我处理财务/数据汇报',
    subtitle: '（财报解读、预算会议、ROI分析）',
    tag: '财务数据词库',
  },
];

const OptionCard = ({ opt, activeVocab, onSelect, onClose }) => {
  const IconCmp = opt.icon;
  const isSelected = activeVocab === opt.id;
  return (
    <button
      className={`${styles.optionCard} ${isSelected ? styles.highlight : ''}`}
      onClick={() => { onSelect(opt.id); onClose(); }}
    >
      <div className={`${styles.iconBox} ${styles[opt.colorClass]}`}>
        <IconCmp size={18} />
      </div>
      <div className={styles.optionBody}>
        <p className={styles.optionTitle}>{opt.title}</p>
        <p className={styles.optionSubtitle}>{opt.subtitle}</p>
        <div className={styles.tagRow}>
          <span className={styles.arrow}>→</span>
          <span className={`${styles.tag} ${styles[opt.colorClass]}`}>
            使用【{opt.tag}】
          </span>
        </div>
      </div>
      {isSelected
        ? <Check size={16} className={`${styles.chevron} ${styles.checkIcon}`} />
        : <ChevronRight size={16} className={styles.chevron} />
      }
    </button>
  );
};

const VocabPickerModal = ({ visible = false, activeVocab = null, onClose = () => {}, onSelect = () => {} }) => {
  const [mode, setMode] = useState('pick');

  useEffect(() => {
    if (!visible) setMode('pick');
  }, [visible]);

  return (
    <div
      className={`${styles.overlay} ${visible ? styles.overlayVisible : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={`${styles.sheet} ${visible ? styles.sheetVisible : ''} ${mode === 'all' ? styles.sheetFull : ''}`}>
        <div className={styles.handleRow}>
          <div className={styles.handle} />
        </div>

        {mode === 'pick' ? (
          <>
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.headerTitle}>
                  <Sparkles size={16} className={styles.sparkle} />
                  <span className={styles.titleText}>
                    选择<span className={styles.titleHighlight}>词库</span>，开启职场之旅
                  </span>
                </div>
                <p className={styles.subtitle}>请花3秒，告诉我们你的主要场景：</p>
              </div>
              <button className={styles.closeBtn} onClick={onClose}>
                <X size={16} />
              </button>
            </div>

            <div className={styles.optionList}>
              {coreOptions.map((opt) => (
                <OptionCard key={opt.id} opt={opt} activeVocab={activeVocab} onSelect={onSelect} onClose={onClose} />
              ))}
            </div>

            <div className={styles.footer}>
              <button className={styles.moreLink} onClick={() => setMode('all')}>
                了解更多词库选项 →
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.headerTitle}>
                  <button className={styles.backBtn} onClick={() => setMode('pick')}>
                    <ArrowLeft size={16} />
                  </button>
                  <span className={styles.titleText}>全部<span className={styles.titleHighlight}>词库</span></span>
                </div>
                <p className={styles.subtitle}>选择最适合你的场景词库</p>
              </div>
              <button className={styles.closeBtn} onClick={onClose}>
                <X size={16} />
              </button>
            </div>

            <p className={styles.groupLabel}>⚡ 常用场景</p>
            <div className={styles.optionList}>
              {coreOptions.map((opt) => (
                <OptionCard key={opt.id} opt={opt} activeVocab={activeVocab} onSelect={onSelect} onClose={onClose} />
              ))}
            </div>

            <p className={styles.groupLabel}>🌟 更多场景</p>
            <div className={styles.optionList}>
              {extraOptions.map((opt) => (
                <OptionCard key={opt.id} opt={opt} activeVocab={activeVocab} onSelect={onSelect} onClose={onClose} />
              ))}
            </div>

            <div className={styles.footerSpace} />
          </>
        )}
      </div>
    </div>
  );
};

export default VocabPickerModal;

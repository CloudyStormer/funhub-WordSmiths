import React from 'react';
import { X, Briefcase, Plane, BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import styles from './index.module.scss';

const vocabOptions = [
  {
    id: 'office',
    icon: Briefcase,
    colorClass: 'purple',
    title: '我主要在办公室沟通',
    subtitle: '（会议、邮件、日常汇报）',
    tag: '使用【职场通用核心词库】',
    highlight: true,
  },
  {
    id: 'travel',
    icon: Plane,
    colorClass: 'green',
    title: '我经常短期出差/见客户',
    subtitle: '（机场、酒店、商务拜访）',
    tag: '使用【商务差旅应急词库】',
  },
  {
    id: 'contract',
    icon: BookOpen,
    colorClass: 'orange',
    title: '我需要处理合同/谈判',
    subtitle: '（法律条款、谈判技巧）',
    tag: '使用【商务谈判精英词库】',
  },
];

const VocabPickerModal = ({ visible = false, onClose = () => {}, onSelect = () => {} }) => (
  <div
    className={`${styles.overlay} ${visible ? styles.overlayVisible : ''}`}
    onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
  >
    <div className={`${styles.sheet} ${visible ? styles.sheetVisible : ''}`}>
      {/* 拖拽条 */}
      <div className={styles.handleRow}>
        <div className={styles.handle} />
      </div>

      {/* 头部 */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerTitle}>
            <Sparkles size={16} className={styles.sparkle} />
            <span className={styles.titleText}>开启你的职场英语学习</span>
          </div>
          <p className={styles.subtitle}>请花3秒，告诉我们你的主要场景：</p>
        </div>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={16} />
        </button>
      </div>

      {/* 选项列表 */}
      <div className={styles.optionList}>
        {vocabOptions.map((opt) => {
          const IconCmp = opt.icon;
          return (
            <button
              key={opt.id}
              className={`${styles.optionCard} ${opt.highlight ? styles.highlight : ''}`}
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
                  <span className={`${styles.tag} ${styles[opt.colorClass]}`}>{opt.tag}</span>
                </div>
              </div>
              <ChevronRight size={16} className={styles.chevron} />
            </button>
          );
        })}
      </div>

      {/* 底部 */}
      <div className={styles.footer}>
        <button className={styles.moreLink} onClick={() => {}}>了解更多词库选项</button>
        <span className={styles.footerHint}>← 可点击，但非必须</span>
      </div>
    </div>
  </div>
);

export default VocabPickerModal;

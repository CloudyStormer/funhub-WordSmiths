import React from 'react';
import { BookOpen, TrendingUp, CheckCircle2, XCircle } from 'lucide-react';
import styles from './index.module.scss';

const stats = [
  { label: '本周学习天数', value: '5 天', trend: '+1' },
  { label: '掌握单词数',   value: '128',  trend: '+12' },
  { label: '平均正确率',   value: '76%',  trend: '+3%' },
];

const reviews = [
  { label: '做得好的地方', icon: CheckCircle2, color: 'rgb(22, 163, 74)',  items: ['坚持每日打卡', '情景对话完成率高'] },
  { label: '需要改进',     icon: XCircle,      color: 'rgb(239, 68, 68)', items: ['发音练习频率不足', '生词复习间隔过长'] },
];

const RetrospectivePage = () => {
  return (
    <section data-cmp="RetrospectivePage" className={styles.page}>
      <div className={styles.titleRow}>
        <BookOpen size={18} color="rgb(44, 108, 255)" />
        <h2 className={styles.title}>本周复盘</h2>
      </div>

      <div className={styles.statsRow}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statCard}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
            <span className={styles.statTrend}>
              <TrendingUp size={11} />
              {s.trend}
            </span>
          </div>
        ))}
      </div>

      {reviews.map((group, i) => {
        const Icon = group.icon;
        return (
          <div key={i} className={styles.reviewGroup}>
            <div className={styles.groupHeader}>
              <Icon size={16} color={group.color} />
              <span className={styles.groupLabel}>{group.label}</span>
            </div>
            <ul className={styles.itemList}>
              {group.items.map((item, j) => (
                <li key={j} className={styles.item}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default RetrospectivePage;

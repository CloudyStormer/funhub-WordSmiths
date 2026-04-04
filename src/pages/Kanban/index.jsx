import React from 'react';
import { Kanban, Circle } from 'lucide-react';
import styles from './index.module.scss';

const columns = [
  {
    id: 'todo',
    label: '待完成',
    color: 'rgb(148, 163, 184)',
    cards: ['学习 deadline 用法', '练习邮件写作'],
  },
  {
    id: 'doing',
    label: '进行中',
    color: 'rgb(44, 108, 255)',
    cards: ['情景对话：会议主持'],
  },
  {
    id: 'done',
    label: '已完成',
    color: 'rgb(22, 163, 74)',
    cards: ['单词记忆：milestone', '发音练习'],
  },
];

const KanbanPage = () => {
  return (
    <section data-cmp="KanbanPage" className={styles.page}>
      <div className={styles.titleRow}>
        <Kanban size={18} color="rgb(44, 108, 255)" />
        <h2 className={styles.title}>学习看板</h2>
      </div>
      <div className={styles.board}>
        {columns.map((col) => (
          <div key={col.id} className={styles.column}>
            <div className={styles.colHeader}>
              <Circle size={8} fill={col.color} color={col.color} />
              <span className={styles.colLabel}>{col.label}</span>
              <span className={styles.colCount}>{col.cards.length}</span>
            </div>
            <div className={styles.cardList}>
              {col.cards.map((card, i) => (
                <div key={i} className={styles.card}>
                  {card}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KanbanPage;

import React from 'react';
import { Star, Users, Briefcase, Presentation } from 'lucide-react';
import styles from './index.module.scss';

const scenarios = [
  { title: '会议主持', icon: Users,        colorClass: 'purple' },
  { title: '客户谈判', icon: Briefcase,    colorClass: 'green' },
  { title: '项目汇报', icon: Presentation, colorClass: 'orange' },
];

const ScenarioSection = () => {
  return (
    <section data-cmp="ScenarioSection" className={styles.section}>
      <div className={styles.sectionTitleRow}>
        <Star color="rgb(250,204,21)" fill="currentColor" size={18} />
        <h2 className={styles.sectionTitle}>推荐情景</h2>
      </div>
      <div className={styles.scenarioGrid}>
        {scenarios.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className={styles.scenarioCard}>
              <div className={`${styles.scenarioIconWrapper} ${styles[item.colorClass]}`}>
                <Icon size={20} />
              </div>
              <span className={styles.scenarioCardTitle}>{item.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ScenarioSection;

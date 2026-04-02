import React from 'react';
import { Star, Users, Briefcase, Presentation } from 'lucide-react';
import styles from '../index.module.css';

const ScenarioSection = () => {
  const scenarios = [
    { title: '会议主持', icon: Users, bgColor: 'rgb(238,242,255)', iconColor: 'rgb(79,70,229)' },
    { title: '客户谈判', icon: Briefcase, bgColor: 'rgb(240,253,244)', iconColor: 'rgb(22,163,74)' },
    { title: '项目汇报', icon: Presentation, bgColor: 'rgb(255,247,237)', iconColor: 'rgb(234,88,12)' }
  ];

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
              <div 
                className={styles.scenarioIconWrapper} 
                style={{ backgroundColor: item.bgColor, color: item.iconColor }}
              >
                <Icon size={20} />
              </div>
              <span className={styles.scenarioCardTitle}>{item.title}</span>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default ScenarioSection;
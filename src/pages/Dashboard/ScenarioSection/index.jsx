import React, { useState } from 'react';
import { Star, Users, Briefcase, Presentation, RefreshCw } from 'lucide-react';
import styles from './index.module.scss';

const allScenarios = [
  { title: '会议主持', icon: Users,         colorClass: 'purple' },
  { title: '客户谈判', icon: Briefcase,     colorClass: 'green'  },
  { title: '项目汇报', icon: Presentation,  colorClass: 'orange' },
  { title: '团队协作', icon: Users,         colorClass: 'green'  },
  { title: '商务洽谈', icon: Briefcase,     colorClass: 'purple' },
  { title: '成果展示', icon: Presentation,  colorClass: 'orange' },
  { title: '面试对话', icon: Users,         colorClass: 'orange' },
  { title: '跨部门沟通', icon: Briefcase,   colorClass: 'purple' },
  { title: '培训演讲', icon: Presentation,  colorClass: 'green'  },
];

const pickThree = (exclude) => {
  const pool = allScenarios.filter((s) => !exclude.includes(s.title));
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
};

const ScenarioSection = () => {
  const [current, setCurrent] = useState(allScenarios.slice(0, 3));
  const [spinning, setSpinning] = useState(false);

  const refresh = () => {
    if (spinning) return;
    setSpinning(true);
    const next = pickThree(current.map((s) => s.title));
    setTimeout(() => {
      setCurrent(next);
      setSpinning(false);
    }, 500);
  };

  return (
    <section data-cmp="ScenarioSection" className={styles.section}>
      <div className={styles.sectionTitleRow}>
        <Star color="rgb(250,204,21)" fill="currentColor" size={18} />
        <h2 className={styles.sectionTitle}>推荐情景</h2>
        <button
          className={`${styles.refreshBtn} ${spinning ? styles.spinning : ''}`}
          onClick={refresh}
          aria-label="换一组"
        >
          <RefreshCw size={15} />
        </button>
      </div>
      <div className={styles.scenarioGrid}>
        {current.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.title + index} className={styles.scenarioCard}>
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

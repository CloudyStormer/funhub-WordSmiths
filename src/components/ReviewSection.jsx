import React from 'react';
import { Clock, Star } from 'lucide-react';
import styles from '../index.module.css';

const ReviewSection = () => {
  const tasks = [
    { word: 'deadline', rating: 3, percentage: '60%' },
    { word: 'prioritize', rating: 2, percentage: '40%' },
    { word: 'milestone', rating: 4, percentage: '85%' },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={14} 
        color={index < rating ? "rgb(250,204,21)" : "rgb(226,232,240)"} 
        fill={index < rating ? "rgb(250,204,21)" : "none"}
      />
    ));
  };

  return (
    <section data-cmp="ReviewSection" className={styles.reviewSection}>
      <div className={styles.sectionTitleRow}>
        <Clock color="rgb(59,130,246)" size={18} />
        <h2 className={styles.sectionTitle}>
          今日复习 <span className={styles.reviewCount}>(3)</span>
        </h2>
      </div>

      <div className={styles.reviewList}>
        {tasks.map((task, index) => (
          <div key={index} className={styles.reviewItem}>
            <span className={styles.reviewWord}>{task.word}</span>
            <div className={styles.reviewStats}>
              <div className={styles.starRow}>
                {renderStars(task.rating)}
              </div>
              <span className={styles.reviewPercentage}>{task.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
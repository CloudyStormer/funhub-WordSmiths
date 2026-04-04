import React from 'react';
import { Search, Calendar, Glasses } from 'lucide-react';
import styles from './index.module.scss';

const Header = () => {
  return (
    <header data-cmp="Header" className={styles.header}>
      <div className={styles.headerLeft}>
        <button className={styles.iconBtn}><Search size={20} /></button>
        <button className={styles.iconBtn}><Glasses size={22} /></button>
      </div>
      <div className={styles.headerRight}>
        <button className={styles.iconBtn}><Calendar size={20} /></button>
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

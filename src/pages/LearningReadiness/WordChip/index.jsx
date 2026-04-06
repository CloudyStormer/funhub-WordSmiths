import React from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './index.module.scss';

const WordChip = ({ word, index, revealed, onReveal }) => (
  <button
    className={`${styles.chip} ${revealed ? styles.revealed : ''}`}
    onClick={onReveal}
  >
    <div className={styles.topRow}>
      <div className={styles.wordMeta}>
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.word}>{word.word}</span>
        {word.tag && <span className={styles.tag}>{word.tag}</span>}
      </div>
      {!revealed && <ChevronRight size={14} className={styles.chevron} />}
    </div>

    {revealed ? (
      <div className={styles.detail}>
        <div className={styles.phoneticRow}>
          <span className={styles.phonetic}>{word.phonetic}</span>
          <span className={styles.pos}>{word.partOfSpeech}</span>
        </div>
        <p className={styles.meaning}>{word.meaning}</p>
        <div className={styles.exampleBlock}>
          <p className={styles.exampleEn}>"{word.example}"</p>
          <p className={styles.exampleZh}>{word.exampleTranslation}</p>
        </div>
      </div>
    ) : (
      <p className={styles.hint}>点击查看释义 · 词性 · 例句</p>
    )}
  </button>
);

export default WordChip;

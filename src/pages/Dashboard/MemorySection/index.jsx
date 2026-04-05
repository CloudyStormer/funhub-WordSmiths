import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, Legend, CartesianGrid,
} from 'recharts';
import { Brain } from 'lucide-react';
import styles from './index.module.scss';

// 艾宾浩斯遗忘曲线：R = e^(-t/S)，S≈1，归一化到100
const ebbinghaus = [100, 58, 44, 36, 31, 25, 21];
// 用户实际曲线：通过复习干预，遗忘速度更慢
const myRetention  = [100, 72, 63, 57, 52, 48, 45];
const labels = ['学习后', '20分钟', '1小时', '1天', '2天', '6天', '31天'];

const data = labels.map((name, i) => ({
  name,
  艾宾浩斯: ebbinghaus[i],
  我的曲线: myRetention[i],
}));

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipLabel}>{label}</p>
      {payload.map((p) => (
        <p key={p.name} className={styles.tooltipRow} style={{ color: p.color }}>
          {p.name}：<strong>{p.value}%</strong>
        </p>
      ))}
    </div>
  );
};

const CustomLegend = () => (
  <div className={styles.legend}>
    <span className={styles.legendItem}>
      <span className={styles.legendDot} style={{ background: 'rgb(148,163,184)' }} />
      艾宾浩斯
    </span>
    <span className={styles.legendItem}>
      <span className={styles.legendDot} style={{ background: 'rgb(99,82,230)' }} />
      我的曲线
    </span>
  </div>
);

const MemorySection = () => (
  <section data-cmp="MemorySection" className={styles.memorySection}>
    <div className={styles.sectionTitleRow}>
      <Brain color="rgb(99,82,230)" size={18} />
      <h2 className={styles.sectionTitle}>遗忘曲线</h2>
    </div>
    <div className={styles.chartCard}>
      <CustomLegend />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(226,232,240,0.8)" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgb(148,163,184)', fontSize: 10 }}
            dy={8}
          />
          <YAxis
            domain={[0, 100]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgb(148,163,184)', fontSize: 10 }}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="艾宾浩斯"
            stroke="rgb(148,163,184)"
            strokeWidth={2}
            strokeDasharray="5 4"
            dot={false}
            activeDot={{ r: 4, fill: 'rgb(148,163,184)' }}
          />
          <Line
            type="monotone"
            dataKey="我的曲线"
            stroke="rgb(99,82,230)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, fill: 'rgb(99,82,230)' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </section>
);

export default MemorySection;

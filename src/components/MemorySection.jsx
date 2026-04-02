import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity } from 'lucide-react';
import styles from '../index.module.css';

const data = [
  { name: '1d', memory: 30 },
  { name: '3d', memory: 60 },
  { name: '7d', memory: 90 },
  { name: '14d', memory: 50 },
  { name: '30d', memory: 20 },
];

const MemorySection = () => {
  return (
    <section data-cmp="MemorySection" className={styles.memorySection}>
      <div className={styles.sectionTitleRow}>
        <Activity color="rgb(239,68,68)" size={18} />
        <h2 className={styles.sectionTitle}>记忆曲线</h2>
      </div>

      <div className={styles.chartCard}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
            <defs>
              <linearGradient id="colorMemory" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgb(79,70,229)" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="rgb(79,70,229)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgb(148,163,184)', fontSize: 10 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgb(148,163,184)', fontSize: 10 }}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', fontSize: '12px' }}
              labelStyle={{ color: 'rgb(71,85,105)', fontWeight: 'bold' }}
            />
            <Area 
              type="monotone" 
              dataKey="memory" 
              stroke="rgb(79,70,229)" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorMemory)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default MemorySection;
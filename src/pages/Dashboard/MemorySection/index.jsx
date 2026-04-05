import React, { useRef, useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  CartesianGrid, ReferenceLine,
} from 'recharts';
import { Brain } from 'lucide-react';
import styles from './index.module.scss';

// X 轴：学习后 今天 明天 后天 4~14天逐天 15天 20天 25天 30天 2~6个月
const data = [
  { name: '学习后', eb: 100, me: 100 },
  { name: '今天',   eb: 68,  me: 86  },
  { name: '明天',   eb: 50,  me: 76  },
  { name: '后天',   eb: 40,  me: 71  },
  { name: '4天',    eb: 33,  me: 68  },
  { name: '5天',    eb: 29,  me: 66  },
  { name: '6天',    eb: 27,  me: 64  },
  { name: '7天',    eb: 25,  me: 63  },
  { name: '8天',    eb: 23,  me: 62  },
  { name: '9天',    eb: 22,  me: 61  },
  { name: '10天',   eb: 21,  me: 60  },
  { name: '11天',   eb: 20,  me: 59  },
  { name: '12天',   eb: 19,  me: 58  },
  { name: '13天',   eb: 18,  me: 58  },
  { name: '14天',   eb: 18,  me: 57  },
  { name: '15天',   eb: 17,  me: 56  },
  { name: '20天',   eb: 14,  me: 53  },
  { name: '25天',   eb: 11,  me: 51  },
  { name: '30天',   eb: 9,   me: 49  },
  { name: '2个月',  eb: 6,   me: 45  },
  { name: '3个月',  eb: 4,   me: 42  },
  { name: '4个月',  eb: 3,   me: 39  },
  { name: '5个月',  eb: 2,   me: 37  },
  { name: '半年',   eb: 2,   me: 35  },
];

// 每格约 40px，首屏（~350px）可见约 8~9 项（今天~8天），完整宽度供右滑
const CHART_WIDTH = data.length * 42;

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipLabel}>{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} className={styles.tooltipRow} style={{ color: p.color }}>
          {p.dataKey === 'eb' ? '艾宾浩斯' : '我的曲线'}：<strong>{p.value}%</strong>
        </p>
      ))}
    </div>
  );
};

const MemorySection = () => {
  const scrollRef = useRef(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => { if (el.scrollLeft > 4) setShowHint(false); };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section data-cmp="MemorySection" className={styles.memorySection}>
      <div className={styles.sectionTitleRow}>
        <Brain color="rgb(99,82,230)" size={18} />
        <h2 className={styles.sectionTitle}>遗忘曲线</h2>
        <span className={styles.aiTag}>AI 估算至半年</span>
      </div>

      <div className={styles.chartWrapper}>
        <div className={styles.scrollArea} ref={scrollRef}>
          {/* 图例 */}
          <div className={styles.legend}>
            <span className={styles.legendItem}>
              <span className={styles.legendLine} style={{ background: 'rgb(148,163,184)' }} />
              艾宾浩斯
            </span>
            <span className={styles.legendItem}>
              <span className={styles.legendLine} style={{ background: 'rgb(99,82,230)' }} />
              我的曲线
            </span>
          </div>

          <LineChart
            width={CHART_WIDTH}
            height={180}
            data={data}
            margin={{ top: 4, right: 16, left: 4, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(226,232,240,0.8)" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgb(148,163,184)', fontSize: 9 }}
              dy={6}
            />
            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgb(148,163,184)', fontSize: 9 }}
              tickFormatter={(v) => `${v}%`}
              width={32}
              tickCount={5}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              x="半年"
              stroke="rgba(99,82,230,0.2)"
              strokeDasharray="4 3"
              label={{ value: '半年后', position: 'insideTopRight', fontSize: 9, fill: 'rgb(148,163,184)' }}
            />
            <Line
              type="monotone"
              dataKey="eb"
              stroke="rgb(148,163,184)"
              strokeWidth={1.8}
              strokeDasharray="5 4"
              dot={{ r: 1.5, fill: 'rgb(148,163,184)', strokeWidth: 0 }}
              activeDot={{ r: 3.5, fill: 'rgb(148,163,184)', strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="me"
              stroke="rgb(99,82,230)"
              strokeWidth={2.2}
              dot={{ r: 2, fill: 'rgb(99,82,230)', strokeWidth: 0 }}
              activeDot={{ r: 4, fill: 'rgb(99,82,230)', strokeWidth: 0 }}
            />
          </LineChart>
        </div>

        {showHint && (
          <div className={styles.fadeHint}>
            <span className={styles.hintText}>右滑</span>
            <span className={styles.hintArrow}>›</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default MemorySection;

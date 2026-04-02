import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Activity } from 'lucide-react';

const data = [
  { name: '1d', memory: 30 },
  { name: '3d', memory: 60 },
  { name: '7d', memory: 90 }, // Peak
  { name: '14d', memory: 50 },
  { name: '30d', memory: 20 },
];

const MemorySection: React.FC = () => {
  return (
    <section data-cmp="MemorySection" className="px-6 py-6 mt-2">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="text-[rgb(239,68,68)]" size={18} />
        <h2 className="text-base font-bold text-[rgb(15,23,42)]">记忆曲线</h2>
      </div>

      <div className="bg-[rgb(255,255,255)] p-4 rounded-2xl border border-[rgb(226,232,240)] shadow-sm h-[220px]">
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
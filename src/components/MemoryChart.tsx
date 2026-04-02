import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { name: '1d', memory: 85 },
  { name: '3d', memory: 60 },
  { name: '7d', memory: 90 }, // Bump up after review
  { name: '14d', memory: 55 },
  { name: '30d', memory: 30 },
];

const MemoryChart: React.FC = () => {
  return (
    <div data-cmp="MemoryChart" className="mt-10">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="text-[rgb(99,102,241)]" size={20} />
        <h2 className="text-xl font-semibold text-[rgb(15,23,42)]">记忆曲线</h2>
      </div>

      <div className="bg-[rgb(255,255,255)] p-6 rounded-2xl border border-[rgb(241,245,249)] shadow-custom h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorMemory" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgb(99,102,241)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="rgb(99,102,241)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgb(241,245,249)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgb(148,163,184)', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgb(148,163,184)', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              labelStyle={{ color: 'rgb(71,85,105)', fontWeight: 'bold' }}
            />
            <Area 
              type="monotone" 
              dataKey="memory" 
              stroke="rgb(99,102,241)" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorMemory)" 
              activeDot={{ r: 6, fill: 'rgb(255,255,255)', stroke: 'rgb(99,102,241)', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MemoryChart;
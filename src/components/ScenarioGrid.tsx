import React from 'react';
import { Star, Users, Briefcase, Presentation } from 'lucide-react';

const ScenarioGrid: React.FC = () => {
  const scenarios = [
    { title: '会议主持', icon: Users, color: 'bg-[rgb(238,242,255)]', textColor: 'text-[rgb(79,70,229)]' },
    { title: '客户谈判', icon: Briefcase, color: 'bg-[rgb(240,253,244)]', textColor: 'text-[rgb(22,163,74)]' },
    { title: '项目汇报', icon: Presentation, color: 'bg-[rgb(255,247,237)]', textColor: 'text-[rgb(234,88,12)]' }
  ];

  return (
    <div data-cmp="ScenarioGrid" className="mt-10">
      <div className="flex items-center gap-2 mb-6">
        <Star className="text-[rgb(245,158,11)]" fill="rgb(245,158,11)" size={20} />
        <h2 className="text-xl font-semibold text-[rgb(15,23,42)]">推荐情景</h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {scenarios.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className="bg-[rgb(255,255,255)] p-6 rounded-2xl border border-[rgb(241,245,249)] shadow-custom hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center gap-4 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color} ${item.textColor} group-hover:scale-110 transition-transform`}>
                <Icon size={28} />
              </div>
              <span className="font-medium text-[rgb(71,85,105)] tracking-wider">{item.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ScenarioGrid;
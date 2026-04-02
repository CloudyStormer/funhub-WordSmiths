import React from 'react';
import { Star, Users, Briefcase, Presentation } from 'lucide-react';

const ScenarioSection: React.FC = () => {
  const scenarios = [
    { title: '会议主持', icon: Users, bgColor: 'bg-[rgb(238,242,255)]', iconColor: 'text-[rgb(79,70,229)]' },
    { title: '客户谈判', icon: Briefcase, bgColor: 'bg-[rgb(240,253,244)]', iconColor: 'text-[rgb(22,163,74)]' },
    { title: '项目汇报', icon: Presentation, bgColor: 'bg-[rgb(255,247,237)]', iconColor: 'text-[rgb(234,88,12)]' }
  ];

  return (
    <section data-cmp="ScenarioSection" className="px-6 py-2">
      <div className="flex items-center gap-2 mb-4">
        <Star className="text-[rgb(250,204,21)]" fill="currentColor" size={18} />
        <h2 className="text-base font-bold text-[rgb(15,23,42)]">推荐情景</h2>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {scenarios.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className="bg-[rgb(255,255,255)] rounded-xl p-4 border border-[rgb(226,232,240)] shadow-sm flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bgColor} ${item.iconColor}`}>
                <Icon size={20} />
              </div>
              <span className="text-xs font-medium text-[rgb(71,85,105)]">{item.title}</span>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default ScenarioSection;
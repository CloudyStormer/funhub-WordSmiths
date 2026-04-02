import React from 'react';
import { Play } from 'lucide-react';

interface ProgressSectionProps {
  days?: number;
  progress?: number;
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ days = 12, progress = 85 }) => {
  return (
    <section data-cmp="ProgressSection" className="px-6 py-4">
      {/* 问候语与核心标识 */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-bold text-[rgb(15,23,42)]">嗨, Alex!</h1>
          
          {/* 成人职场版 专属标识 */}
          <div className="flex items-center bg-gradient-to-r from-[rgb(15,23,42)] to-[rgb(51,65,85)] px-2.5 py-1 rounded text-[rgb(255,255,255)] text-xs font-bold tracking-wider shadow-sm border border-[rgb(71,85,105)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(250,204,21)] mr-1.5 animate-pulse"></span>
            成人职场版 PRO
          </div>
        </div>
        <p className="text-[rgb(100,116,139)] text-sm">
          已连续学习 <span className="font-bold text-[rgb(15,23,42)]">{days}</span> 天
        </p>
      </div>

      {/* 进度卡片 */}
      <div className="bg-[rgb(255,255,255)] rounded-2xl p-5 border border-[rgb(226,232,240)] shadow-custom mb-6">
        <div className="flex justify-between items-end mb-3">
          <span className="text-[rgb(71,85,105)] font-medium text-sm">今日学习进度</span>
          <span className="text-[rgb(15,23,42)] font-bold text-lg">{progress}%</span>
        </div>
        
        {/* 进度条 */}
        <div className="h-2 w-full bg-[rgb(241,245,249)] rounded-full overflow-hidden mb-6">
          <div 
            className="h-full bg-[rgb(79,70,229)] rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* 主按钮 */}
        <button className="w-full flex items-center justify-center gap-2 bg-[rgb(15,23,42)] text-[rgb(255,255,255)] py-3.5 rounded-xl font-medium hover:bg-[rgb(51,65,85)] active:scale-[0.98] transition-all">
          <Play size={18} fill="currentColor" />
          快速开始学习
        </button>
      </div>
    </section>
  );
};

export default ProgressSection;
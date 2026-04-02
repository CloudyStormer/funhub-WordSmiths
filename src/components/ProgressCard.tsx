import React from 'react';

interface ProgressCardProps {
  progress?: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ progress = 85 }) => {
  return (
    <div data-cmp="ProgressCard" className="bg-[rgb(255,255,255)] rounded-2xl p-6 shadow-custom border border-[rgb(241,245,249)] mt-6">
      <div className="flex justify-between items-end mb-4">
        <h3 className="text-[rgb(71,85,105)] font-medium">今日学习进度</h3>
        <span className="text-[rgb(15,23,42)] font-bold text-xl">{progress}%</span>
      </div>
      
      {/* Progress Bar Background */}
      <div className="h-4 w-full bg-[rgb(241,245,249)] rounded-full overflow-hidden mb-8">
        {/* Progress Bar Fill */}
        <div 
          className="h-full bg-[rgb(51,65,85)] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button className="w-full py-4 bg-[rgb(15,23,42)] text-[rgb(255,255,255)] rounded-xl font-medium text-lg hover:bg-[rgb(51,65,85)] transition-colors shadow-sm">
        快速开始学习
      </button>
    </div>
  );
};

export default ProgressCard;
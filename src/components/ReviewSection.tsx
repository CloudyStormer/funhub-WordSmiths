import React from 'react';
import { Clock, Star } from 'lucide-react';

const ReviewSection: React.FC = () => {
  const tasks = [
    { word: 'deadline', rating: 3, percentage: '60%' },
    { word: 'prioritize', rating: 2, percentage: '40%' },
    { word: 'milestone', rating: 4, percentage: '85%' },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={14} 
        className={index < rating ? "text-[rgb(250,204,21)]" : "text-[rgb(226,232,240)]"} 
        fill={index < rating ? "currentColor" : "none"}
      />
    ));
  };

  return (
    <section data-cmp="ReviewSection" className="px-6 py-2 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="text-[rgb(59,130,246)]" size={18} />
        <h2 className="text-base font-bold text-[rgb(15,23,42)]">今日复习 <span className="text-[rgb(148,163,184)] font-normal text-sm ml-1">(3)</span></h2>
      </div>

      <div className="bg-[rgb(255,255,255)] rounded-2xl border border-[rgb(226,232,240)] shadow-sm overflow-hidden">
        {tasks.map((task, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-between p-4 bg-[rgb(255,255,255)] hover:bg-[rgb(248,250,252)] transition-colors ${
              index !== tasks.length - 1 ? 'border-b border-[rgb(241,245,249)]' : ''
            }`}
          >
            <span className="font-mono text-[rgb(15,23,42)] font-medium text-[15px]">{task.word}</span>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {renderStars(task.rating)}
              </div>
              <span className="text-[rgb(100,116,139)] text-xs w-8 text-right">{task.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
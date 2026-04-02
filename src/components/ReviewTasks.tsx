import React from 'react';
import { Clock, Star } from 'lucide-react';

const ReviewTasks: React.FC = () => {
  const tasks = [
    { word: 'deadline', rating: 3, percentage: '60%' },
    { word: 'prioritize', rating: 2, percentage: '40%' },
    { word: 'milestone', rating: 4, percentage: '85%' },
  ];

  // Helper to render stars based on rating out of 5
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={18} 
        className={index < rating ? "text-[rgb(245,158,11)]" : "text-[rgb(226,232,240)]"} 
        fill={index < rating ? "rgb(245,158,11)" : "none"}
      />
    ));
  };

  return (
    <div data-cmp="ReviewTasks" className="mt-10 mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="text-[rgb(239,68,68)]" size={20} />
        <h2 className="text-xl font-semibold text-[rgb(15,23,42)]">今日复习 <span className="text-[rgb(148,163,184)] text-base font-normal">(3)</span></h2>
      </div>

      <div className="bg-[rgb(255,255,255)] rounded-2xl border border-[rgb(241,245,249)] shadow-custom overflow-hidden">
        {tasks.map((task, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-between p-5 hover:bg-[rgb(248,250,252)] transition-colors cursor-pointer ${
              index !== tasks.length - 1 ? 'border-b border-[rgb(241,245,249)]' : ''
            }`}
          >
            <span className="font-mono text-lg text-[rgb(15,23,42)] font-medium">{task.word}</span>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {renderStars(task.rating)}
              </div>
              <span className="text-[rgb(148,163,184)] text-sm w-12 text-right">{task.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewTasks;
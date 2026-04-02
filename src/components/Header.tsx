import React from 'react';
import { Search, Calendar, Glasses } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header data-cmp="Header" className="flex items-center justify-between px-6 py-4 bg-[rgb(255,255,255)] sticky top-0 z-10 border-b border-[rgb(241,245,249)]">
      <div className="flex items-center gap-5 text-[rgb(100,116,139)]">
        <button className="hover:text-[rgb(15,23,42)] transition-colors">
          <Search size={20} />
        </button>
        <button className="hover:text-[rgb(15,23,42)] transition-colors">
          {/* 暂用眼镜图标代替线框图中的 oo (可能代表发现或眼镜) */}
          <Glasses size={22} />
        </button>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-[rgb(100,116,139)] hover:text-[rgb(15,23,42)] transition-colors">
          <Calendar size={20} />
        </button>
        {/* 用户头像占位 */}
        <div className="w-8 h-8 rounded-full bg-[rgb(226,232,240)] border border-[rgb(203,213,225)] overflow-hidden">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=f8fafc" alt="User Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
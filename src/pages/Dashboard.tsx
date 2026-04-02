import React from 'react';
import Header from '../components/Header';
import ProgressSection from '../components/ProgressSection';
import ScenarioSection from '../components/ScenarioSection';
import MemorySection from '../components/MemorySection';
import ReviewSection from '../components/ReviewSection';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[rgb(241,245,249)] flex justify-center font-sans text-[rgb(15,23,42)]">
      {/* 模拟移动端 App 的外壳容器 */}
      <div className="w-full max-w-[480px] bg-[rgb(250,250,252)] min-h-screen shadow-2xl relative overflow-x-hidden border-x border-[rgb(226,232,240)]">
        <Header />
        
        <main className="pb-10">
          <ProgressSection />
          <ScenarioSection />
          <MemorySection />
          <ReviewSection />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
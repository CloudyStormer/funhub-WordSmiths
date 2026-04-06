import React from 'react';
import ProgressSection from './ProgressSection';
import ScenarioSection from './ScenarioSection';
import MemorySection from './MemorySection';
import ReviewSection from './ReviewSection';

const Dashboard = ({ onOpenModal }) => (
  <>
    <ProgressSection onOpenModal={onOpenModal} />
    <ScenarioSection onOpenModal={onOpenModal} />
    <MemorySection />
    <ReviewSection />
  </>
);

export default Dashboard;

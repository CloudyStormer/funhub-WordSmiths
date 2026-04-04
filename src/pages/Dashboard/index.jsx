import React from 'react';
import { BookOpen, TrendingUp, CheckCircle2, XCircle } from 'lucide-react';
import ProgressSection from './ProgressSection';
import ScenarioSection from './ScenarioSection';
import MemorySection from './MemorySection';
import ReviewSection from './ReviewSection';
import KanbanPage from '../Kanban';
import styles from './index.module.scss';

const Dashboard = () => {
  return <>
    <ProgressSection />
    <ScenarioSection />
    <MemorySection />
    <ReviewSection />
  </>
};

export default Dashboard;

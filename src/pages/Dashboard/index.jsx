import React from 'react';
import { BookOpen, TrendingUp, CheckCircle2, XCircle } from 'lucide-react';
import ProgressSection from '../../components/ProgressSection';
import ScenarioSection from '../../components/ScenarioSection';
import MemorySection from '../../components/MemorySection';
import ReviewSection from '../../components/ReviewSection';
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

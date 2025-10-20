'use client';

import { useState } from 'react';
import Header from './components/Header';
import KPICards from './components/KPICards';
import SalesFunnel from './components/SalesFunnel';
import GeographicMap from './components/GeographicMap';
import SalesTrend from './components/SalesTrend';
import Leaderboard from './components/Leaderboard';
import { generateMockData } from './utils/mockData';

export default function Home() {
  const [userRole, setUserRole] = useState<'admin' | 'manager' | 'rep'>('admin');
  const [dateRange, setDateRange] = useState({ start: '2024-01-01', end: '2024-12-31' });

  const data = generateMockData();

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen pb-12">
      <Header
        dateRange={dateRange}
        setDateRange={setDateRange}
        userRole={userRole}
        setUserRole={setUserRole}
        onPrint={handlePrint}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <KPICards data={data.kpis} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <SalesFunnel data={data.funnel} />
          <GeographicMap data={data.geographic} />
        </div>

        <div className="mt-8">
          <SalesTrend data={data.trend} />
        </div>

        <div className="mt-8">
          <Leaderboard data={data.leaderboard} userRole={userRole} />
        </div>
      </div>
    </main>
  );
}

export function generateMockData() {
  return {
    kpis: {
      totalSales: {
        value: 2847500,
        change: 12.5,
      },
      conversionRate: {
        value: 23.7,
        change: 3.2,
      },
      avgDealSize: {
        value: 45890,
        change: -2.1,
      },
    },
    funnel: [
      { stage: 'Leads', count: 1250, value: 5000000 },
      { stage: 'Qualified', count: 875, value: 3500000 },
      { stage: 'Proposal', count: 520, value: 2400000 },
      { stage: 'Negotiation', count: 310, value: 1550000 },
      { stage: 'Closed Won', count: 185, value: 925000 },
    ],
    geographic: [
      { region: 'North', sales: 845000, growth: 15.3 },
      { region: 'South', sales: 672000, growth: 8.7 },
      { region: 'East', sales: 756000, growth: -3.2 },
      { region: 'West', sales: 574500, growth: 22.1 },
    ],
    trend: [
      { month: 'Jan', sales: 215000, target: 200000 },
      { month: 'Feb', sales: 198000, target: 210000 },
      { month: 'Mar', sales: 245000, target: 220000 },
      { month: 'Apr', sales: 268000, target: 230000 },
      { month: 'May', sales: 289000, target: 240000 },
      { month: 'Jun', sales: 312000, target: 250000 },
      { month: 'Jul', sales: 295000, target: 260000 },
      { month: 'Aug', sales: 327000, target: 270000 },
      { month: 'Sep', sales: 348000, target: 280000 },
      { month: 'Oct', sales: 365000, target: 290000 },
      { month: 'Nov', sales: 342000, target: 300000 },
      { month: 'Dec', sales: 443500, target: 320000 },
    ],
    leaderboard: [
      { id: 1, name: 'Sarah Johnson', sales: 485000, deals: 28, conversionRate: 32.5, growth: 18.3 },
      { id: 2, name: 'Michael Chen', sales: 467000, deals: 25, conversionRate: 29.8, growth: 15.7 },
      { id: 3, name: 'Emily Rodriguez', sales: 421000, deals: 31, conversionRate: 28.2, growth: 22.1 },
      { id: 4, name: 'David Kim', sales: 398000, deals: 22, conversionRate: 26.9, growth: 9.4 },
      { id: 5, name: 'Jessica Williams', sales: 375000, deals: 27, conversionRate: 25.1, growth: 12.8 },
      { id: 6, name: 'Robert Taylor', sales: 342000, deals: 19, conversionRate: 24.3, growth: -3.2 },
      { id: 7, name: 'Amanda Brown', sales: 318000, deals: 23, conversionRate: 22.7, growth: 7.6 },
      { id: 8, name: 'James Martinez', sales: 289000, deals: 18, conversionRate: 21.4, growth: 5.3 },
      { id: 9, name: 'Lisa Anderson', sales: 267000, deals: 20, conversionRate: 20.8, growth: 11.2 },
      { id: 10, name: 'Christopher Lee', sales: 245500, deals: 17, conversionRate: 19.5, growth: -1.8 },
    ],
  };
}

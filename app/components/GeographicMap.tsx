import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface GeographicData {
  region: string;
  sales: number;
  growth: number;
}

interface GeographicMapProps {
  data: GeographicData[];
}

export default function GeographicMap({ data }: GeographicMapProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value);
  };

  const getBarColor = (growth: number) => {
    if (growth >= 10) return '#16a34a'; // positive-600
    if (growth >= 0) return '#22c55e'; // positive-500
    if (growth >= -10) return '#ef4444'; // negative-500
    return '#dc2626'; // negative-600
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Sales by Region</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="region" stroke="#6b7280" />
            <YAxis stroke="#6b7280" tickFormatter={(value) => formatCurrency(value)} />
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Bar dataKey="sales" fill="#3b82f6" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.growth)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-sm font-medium text-gray-900">{item.region}</span>
            <span className="text-xs text-gray-600">{formatCurrency(item.sales)}</span>
            <span className={`text-xs font-medium ${item.growth >= 0 ? 'text-positive-600' : 'text-negative-600'}`}>
              {item.growth >= 0 ? '+' : ''}{item.growth.toFixed(1)}% growth
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

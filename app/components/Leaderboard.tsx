import { useState } from 'react';
import { ChevronUp, ChevronDown, Trophy, Medal, Award } from 'lucide-react';

interface LeaderboardEntry {
  id: number;
  name: string;
  sales: number;
  deals: number;
  conversionRate: number;
  growth: number;
}

interface LeaderboardProps {
  data: LeaderboardEntry[];
  userRole: 'admin' | 'manager' | 'rep';
}

type SortField = 'name' | 'sales' | 'deals' | 'conversionRate' | 'growth';

export default function Leaderboard({ data, userRole }: LeaderboardProps) {
  const [sortField, setSortField] = useState<SortField>('sales');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const multiplier = sortDirection === 'asc' ? 1 : -1;
    if (a[sortField] < b[sortField]) return -1 * multiplier;
    if (a[sortField] > b[sortField]) return 1 * multiplier;
    return 0;
  });

  const getRankIcon = (index: number) => {
    if (index === 0) return <Trophy className="w-5 h-5 text-yellow-500" aria-label="First place" />;
    if (index === 1) return <Medal className="w-5 h-5 text-gray-400" aria-label="Second place" />;
    if (index === 2) return <Award className="w-5 h-5 text-orange-600" aria-label="Third place" />;
    return <span className="text-sm text-gray-500">{index + 1}</span>;
  };

  const SortButton = ({ field, label }: { field: SortField; label: string }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center gap-1 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
      aria-label={`Sort by ${label}`}
    >
      <span>{label}</span>
      {sortField === field && (
        sortDirection === 'asc' ? (
          <ChevronUp className="w-4 h-4" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        )
      )}
    </button>
  );

  const canViewDetails = userRole === 'admin' || userRole === 'manager';

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Sales Leaderboard</h2>
        {!canViewDetails && (
          <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            Limited View
          </span>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full" role="table">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Rank</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                <SortButton field="name" label="Name" />
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                <SortButton field="sales" label="Total Sales" />
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                <SortButton field="deals" label="Deals Closed" />
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                <SortButton field="conversionRate" label="Conv. Rate" />
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                <SortButton field="growth" label="Growth" />
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((entry, index) => (
              <tr
                key={entry.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center w-8">
                    {getRankIcon(index)}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="font-medium text-gray-900">{entry.name}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-gray-900">{formatCurrency(entry.sales)}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-gray-700">{entry.deals}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-gray-700">{entry.conversionRate.toFixed(1)}%</span>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`font-medium ${
                      entry.growth >= 0 ? 'text-positive-600' : 'text-negative-600'
                    }`}
                  >
                    {entry.growth >= 0 ? '+' : ''}{entry.growth.toFixed(1)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!canViewDetails && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Full leaderboard details are available to Admin and Manager roles only.
          </p>
        </div>
      )}
    </div>
  );
}

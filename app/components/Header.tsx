import { Printer, Calendar } from 'lucide-react';

interface HeaderProps {
  dateRange: { start: string; end: string };
  setDateRange: (range: { start: string; end: string }) => void;
  userRole: 'admin' | 'manager' | 'rep';
  setUserRole: (role: 'admin' | 'manager' | 'rep') => void;
  onPrint: () => void;
}

export default function Header({ dateRange, setDateRange, userRole, setUserRole, onPrint }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Sales Performance Dashboard
            </h1>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm text-gray-600">Role:</span>
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value as 'admin' | 'manager' | 'rep')}
                className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Select user role"
              >
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="rep">Sales Rep</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-4 py-2">
              <Calendar className="w-5 h-5 text-gray-600" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                  className="border-0 bg-transparent text-sm focus:outline-none focus:ring-0"
                  aria-label="Start date"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                  className="border-0 bg-transparent text-sm focus:outline-none focus:ring-0"
                  aria-label="End date"
                />
              </div>
            </div>

            <button
              onClick={onPrint}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              aria-label="Print report"
            >
              <Printer className="w-5 h-5" aria-hidden="true" />
              <span className="font-medium">Print Report</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

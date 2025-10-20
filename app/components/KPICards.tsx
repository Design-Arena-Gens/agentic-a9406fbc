import { TrendingUp, TrendingDown, DollarSign, Target, ShoppingCart } from 'lucide-react';

interface KPIData {
  totalSales: { value: number; change: number };
  conversionRate: { value: number; change: number };
  avgDealSize: { value: number; change: number };
}

interface KPICardsProps {
  data: KPIData;
}

export default function KPICards({ data }: KPICardsProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const cards = [
    {
      title: 'Total Sales',
      value: formatCurrency(data.totalSales.value),
      change: data.totalSales.change,
      icon: DollarSign,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Conversion Rate',
      value: formatPercent(data.conversionRate.value),
      change: data.conversionRate.change,
      icon: Target,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Average Deal Size',
      value: formatCurrency(data.avgDealSize.value),
      change: data.avgDealSize.change,
      icon: ShoppingCart,
      color: 'bg-green-50 text-green-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const isPositive = card.change >= 0;
        const TrendIcon = isPositive ? TrendingUp : TrendingDown;

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            role="article"
            aria-label={`${card.title} card`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{card.title}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">{card.value}</p>
                <div className="flex items-center gap-1">
                  <TrendIcon
                    className={`w-4 h-4 ${isPositive ? 'text-positive-600' : 'text-negative-600'}`}
                    aria-hidden="true"
                  />
                  <span
                    className={`text-sm font-medium ${isPositive ? 'text-positive-600' : 'text-negative-600'}`}
                  >
                    {isPositive ? '+' : ''}{formatPercent(card.change)}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last period</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${card.color}`}>
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

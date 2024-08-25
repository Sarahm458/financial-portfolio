import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({});
  const [portfolioInsights, setPortfolioInsights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const metricsData = {
        totalValue: 100000,
        profitLoss: 5000,
        annualReturn: 7.5,
      };
      const insightsData = [
        { name: 'Stock A', value: 50000 },
        { name: 'Stock B', value: 30000 },
        { name: 'Stock C', value: 20000 },
      ];

      setMetrics(metricsData);
      setPortfolioInsights(insightsData);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 text-center bg-gray-100 min-h-screen ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h2>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 mb-6 ">
        <div className="bg-white shadow-lg rounded-lg p-6 ">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Financial Metrics</h3>
          <p className="text-gray-600">Total Value: <span className="font-bold text-gray-800">${metrics.totalValue}</span></p>
          <p className="text-gray-600">Profit/Loss: <span className="font-bold text-gray-800">${metrics.profitLoss}</span></p>
          <p className="text-gray-600">Annual Return: <span className="font-bold text-gray-800">{metrics.annualReturn}%</span></p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Portfolio Insights</h3>
        <ul className="list-disc pl-5 text-left">
          {portfolioInsights.map((insight, index) => (
            <li key={index} className="mb-2 text-gray-600">
              <span className="font-bold text-gray-800">{insight.name}</span>: ${insight.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

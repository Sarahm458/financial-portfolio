import React, { useState } from 'react';
import PortfolioForm from './PortfolioForm';
import TransactionManagement from './TransactionManagement';

const PortfolioManagement = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [currentPortfolio, setCurrentPortfolio] = useState(null);

  const addPortfolio = (portfolio) => {
    setPortfolios([...portfolios, { ...portfolio, id: portfolios.length + 1, totalValue: portfolio.totalValue }]);
  };

  const updatePortfolio = (updatedPortfolio) => {
    setPortfolios(
      portfolios.map((portfolio) =>
        portfolio.id === updatedPortfolio.id ? updatedPortfolio : portfolio
      )
    );
    setCurrentPortfolio(null);
  };

  const editPortfolio = (portfolio) => {
    setCurrentPortfolio(portfolio);
  };

  const deletePortfolio = (id) => {
    setPortfolios(portfolios.filter((portfolio) => portfolio.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Portfolio Management</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <PortfolioForm
          initialValues={currentPortfolio || { name: '', owner: '', totalValue: 0, creationDate: '' }}
          onSubmit={currentPortfolio ? updatePortfolio : addPortfolio}
        />
      </div>
      <ul className="space-y-4">
        {portfolios.map((portfolio) => (
          <li key={portfolio.id} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">{portfolio.name}</h3>
                <p className="text-gray-600">Owner: {portfolio.owner}</p>
                <p className="text-gray-600">Total Value: ${portfolio.totalValue}</p>
                <p className="text-gray-600">Creation Date: {portfolio.creationDate}</p>
              </div>
              <div>
                <button onClick={() => editPortfolio(portfolio)} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                <button onClick={() => deletePortfolio(portfolio.id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
              </div>
            </div>
            <TransactionManagement
              portfolioId={portfolio.id}
              portfolios={portfolios}
              setPortfolios={setPortfolios}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioManagement;

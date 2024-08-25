import React, { useState } from 'react';

const TransactionManagement = ({ portfolioId, portfolios, setPortfolios }) => {
  const [transactionType, setTransactionType] = useState('Buy');
  const [amount, setAmount] = useState('');

  const addTransaction = () => {
    if (amount) {
      const updatedPortfolios = portfolios.map((portfolio) => {
        if (portfolio.id === portfolioId) {
          let newTotalValue = portfolio.totalValue;
          if (transactionType === 'Buy') {
            newTotalValue -= parseFloat(amount); 
          } else if (transactionType === 'Sell') {
            newTotalValue += parseFloat(amount); 
          } else if (transactionType === 'Transfer') {
            newTotalValue -= parseFloat(amount); 
          }
          return { ...portfolio, totalValue: newTotalValue };
        }
        return portfolio;
      });
      setPortfolios(updatedPortfolios);
      setAmount('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transaction Management</h2>
      <div className="mb-4">
        <label className="block mb-2">Transaction Type:</label>
        <select
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
          <option value="Transfer">Transfer</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <button
        onClick={addTransaction}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Transaction
      </button>
    </div>
  );
};

export default TransactionManagement;

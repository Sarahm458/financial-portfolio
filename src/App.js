import React from 'react';
import Dashboard from './Components/Dashboard';
import PortfolioManagement from './Components/PortfolioManagement';
import "./App.css";


const App = () => {
  return (
    <div className='App'>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center mt-4">Financial Portfolio Management System</h1>
      <Dashboard />
      <PortfolioManagement />
    </div>
  );
};

export default App;


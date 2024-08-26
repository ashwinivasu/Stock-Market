import React, { useState } from 'react';
import './App.css';
import StockList from './StockList';
import Holdings from './Holdings';

function App() {
  const [holdings, setHoldings] = useState([]);

  const buyStock = (stock) => {
    setHoldings([...holdings, stock]);
  };

  const sellStock = (stockId) => {
    setHoldings(holdings.filter(stock => stock.id !== stockId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Real-Time Stock Market Application</h1>
      </header>
      <div className="dashboard">
        <StockList buyStock={buyStock} />
        <Holdings holdings={holdings} sellStock={sellStock} />
      </div>
    </div>
  );
}

export default App;

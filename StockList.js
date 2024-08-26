import React from 'react';

const stocks = [
  { id: 1, name: 'Stock A', price: 150 },
  { id: 2, name: 'Stock B', price: 200 },
  { id: 3, name: 'Stock C', price: 250 },
];

function StockList({ buyStock }) {
  return (
    <div className="stock-list">
      <h2>Available Stocks</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.id}>
            <span>{stock.name} (Price: ${stock.price})</span>
            <button onClick={() => buyStock(stock)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockList;

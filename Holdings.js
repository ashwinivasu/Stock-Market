import React from 'react';

function Holdings({ holdings, sellStock }) {
  return (
    <div className="holdings">
      <h2>Your Holdings</h2>
      <ul>
        {holdings.map(stock => (
          <li key={stock.id}>
            <span>{stock.name} (Qty: 1)</span>
            <button className="sell" onClick={() => sellStock(stock.id)}>Sell</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Holdings;

import React from "react";

import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table responsive-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td data-label="Product">
                    <span className="cell-value">{stock.product}</span>
                  </td>
                  <td data-label="Instrument">
                    <span className="cell-value">{stock.name}</span>
                  </td>
                  <td data-label="Qty.">
                    <span className="cell-value">{stock.qty}</span>
                  </td>
                  <td data-label="Avg.">
                    <span className="cell-value">{stock.avg.toFixed(2)}</span>
                  </td>
                  <td data-label="LTP">
                    <span className="cell-value">{stock.price.toFixed(2)}</span>
                  </td>
                  <td className={profClass} data-label="P&L">
                    <span className="cell-value">
                      {(curValue - stock.avg * stock.qty).toFixed(2)}
                    </span>
                  </td>
                  <td className={dayClass} data-label="Chg.">
                    <span className="cell-value">{stock.day}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;

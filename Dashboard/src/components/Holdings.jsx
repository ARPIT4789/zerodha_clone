import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { getBackendUrl } from "../utils/auth";

// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get(`${getBackendUrl()}/allHoldings`).then((res) => {
      // console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // export const data = {
  //   labels,
  //   datasets: [
  // {
  //   label: 'Dataset 1',
  //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
  // },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table responsive-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td data-label="Instrument">
                    <span className="cell-value">{stock.name}</span>
                  </td>
                  <td data-label="Qty.">
                    <span className="cell-value">{stock.qty}</span>
                  </td>
                  <td data-label="Avg. cost">
                    <span className="cell-value">{stock.avg.toFixed(2)}</span>
                  </td>
                  <td data-label="LTP">
                    <span className="cell-value">{stock.price.toFixed(2)}</span>
                  </td>
                  <td data-label="Cur. val">
                    <span className="cell-value">{curValue.toFixed(2)}</span>
                  </td>
                  <td className={profClass} data-label="P&L">
                    <span className="cell-value">
                      {(curValue - stock.avg * stock.qty).toFixed(2)}
                    </span>
                  </td>
                  <td className={profClass} data-label="Net chg.">
                    <span className="cell-value">{stock.net}</span>
                  </td>
                  <td className={dayClass} data-label="Day chg.">
                    <span className="cell-value">{stock.day}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;

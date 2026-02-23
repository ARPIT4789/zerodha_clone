import React from "react";

export default function Hero() {
  return (
    <div className="container">
      <div className="row text-center mb-4 py-4 px-2">
        <h1 className="fs-2 mt-3">Charges</h1>
        <h2 className="fs-4 text-muted mt-2 mb-4">List of all charges and taxes</h2>

        <div className="col-12 col-md-4 mt-3">
          <img src="images/pricing0.svg" alt="equity pricing" style={{ width: "70%" }} />
          <h3 className="fs-4 my-3">Free equity delivery</h3>
          <p className="text-muted price-card-copy">
            All equity delivery investments (NSE, BSE) are absolutely free.
            Brokerage is Rs 0.
          </p>
        </div>

        <div className="col-12 col-md-4 mt-3">
          <img src="images/intradayTrades.svg" alt="intraday pricing" style={{ width: "70%" }} />
          <h3 className="fs-4 my-3">Intraday and F&O trades</h3>
          <p className="text-muted price-card-copy">
            Flat Rs 20 or 0.03% (whichever is lower) per executed intraday order.
            Flat Rs 20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 mt-3">
          <img src="images/pricing0.svg" alt="mutual fund pricing" style={{ width: "70%" }} />
          <h3 className="fs-4 my-3">Free direct MF</h3>
          <p className="text-muted price-card-copy">
            All direct mutual fund investments are free with zero commissions and
            DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

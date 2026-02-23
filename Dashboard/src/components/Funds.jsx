import React from "react";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <div className="funds-actions">
          <button type="button" className="btn btn-green">
            Add funds
          </button>
          <button type="button" className="btn btn-blue">
            Withdraw
          </button>
        </div>
      </div>

      <div className="row funds-layout">
        <div className="col funds-primary">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4,064.00</p>
            </div>
            <div className="data">
              <p>Total collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col funds-secondary">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <button type="button" className="btn btn-blue">
              Open Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;

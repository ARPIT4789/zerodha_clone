import React from 'react'

export default function Awards() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6 p-3 p-md-5 text-center text-lg-start">
            <img
              src="images/largestBroker.svg"
              alt="largest Broker Award img"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-lg-6 p-3 p-md-5">
            <h2>Largest Stock Broker in India</h2>
            <p className="mb-4">
              2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by
              trading and investing in:
            </p>
            <div className="row">
              <div className="col-12 col-md-6">
                <ul>
                  <li className="mb-3">Futures and Options</li>
                  <li className="mb-3">Commodity derivatives</li>
                  <li className="mb-3">Currency derivatives</li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <ul>
                  <li className="mb-3">Stocks & IPOs</li>
                  <li className="mb-3">Direct Mutual Funds</li>
                  <li className="mb-3">Bonds and Govt. Securities</li>
                </ul>
              </div>
            </div>
            <img src="images/pressLogos.png" alt="Press Logo image" className="img-fluid mt-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

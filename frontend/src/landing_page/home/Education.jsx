import React from 'react'

export default function Education() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <img src="images/education.svg" alt="Education image" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-6 mb-5">
            <h1 className="fs-3 my-4 my-md-5">Free and open market education</h1>
            <p>
              Varsity, the largest online stock market education book in the world covering everything from the
              basics to advanced trading.
            </p>
            <a href="#" style={{ textDecoration: 'none' }}>
              Varsity<i className="fa-solid fa-arrow-right ms-2"></i>
            </a>

            <p className="mt-4 mt-md-5">
              TradingQ&A, the most active trading and investment community in India for all your market related
              queries.
            </p>
            <a href="#" style={{ textDecoration: 'none' }}>
              TradingQ&A <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

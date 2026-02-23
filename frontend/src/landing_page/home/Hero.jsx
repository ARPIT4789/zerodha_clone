import React from 'react'

export default function Hero() {
  return (
    <>
      <div className="container mb-5">
        <div className="row text-center justify-content-center">
          <div className="col-12">
            <img
              src="images/homeHero.png"
              alt="home Hero image"
              className="img-fluid mb-4 mb-md-5 hero-image"
            />
          </div>
          <div className="col-12">
            <h1 className="mt-3 mt-md-5">Invest in everything</h1>
            <p className="fs-5 mb-4 mb-md-5">
              Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
            </p>
            <button className="btn btn-primary fs-5 hero-cta">Sign up for free</button>
          </div>
        </div>
      </div>
    </>
  )
}

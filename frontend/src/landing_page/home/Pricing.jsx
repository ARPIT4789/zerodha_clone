import React from 'react'

export default function Pricing() {
  return (
    <>
      <div className="container p-3 p-md-5">
        <div className="row g-4 align-items-center px-3 px-md-5">
          <div className="col-12 col-lg-4">
            <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="#" style={{ textDecoration: 'none' }}>
              See pricing<i className="fa-solid fa-arrow-right ms-2"></i>
            </a>
          </div>
          <div className="col-12 col-lg-7">
            <div className="row g-3 text-center">
              <div className="col-12 col-sm-6">
                <div className="border p-3 h-100">
                  <h3>&#8377;0</h3>
                  <p className="mt-4">Free equity delivery and <br /> direct mutual funds</p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="border p-3 h-100">
                  <h3>&#8377;20</h3>
                  <p className="mt-4">Intraday and F&amp;O</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

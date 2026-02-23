import React from 'react'

export default function Stats() {
  return (
    <>
      <div className="container p-3 p-md-5">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-6 p-0 p-md-4">
            <h1 className="fs-2 mb-4">Trust with confidence</h1>
            <h2 className="fs-4">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making
              us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
            </p>
            <h2 className="fs-4">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use
              at your pace, the way you like.
            </p>
            <h2 className="fs-4">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored
              services specific to your needs.
            </p>
            <h2 className="fs-4">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively
              help you do better with your money.
            </p>
          </div>
          <div className="col-12 col-lg-6 p-0 p-md-4 text-center">
            <img src="images/ecosystem.png" alt="ecosystem image" className="img-fluid" />
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-3 stat-links">
              <a href="#" className="stat-link" style={{ textDecoration: 'none' }}>
                Explore our productsc
              </a>
              <a href="#" className="stat-link" style={{ textDecoration: 'none' }}>
                Try Kite demo <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

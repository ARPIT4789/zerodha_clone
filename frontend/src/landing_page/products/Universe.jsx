import React from 'react'

export default function Universe() {
  return (
    <>
      <div className="container">
        <div className="row text-center py-4">
          <h1 className='my-3 fs-3'>The Zerodha Universe</h1>
          <p>Extend your trading and investment experience even further with our partner platforms</p>
          <div className="col-12 col-md-6 col-lg-4 mt-4">
            <div>
              <img src="images/zerodhaFundhouse.png" alt="image" style={{ width: "50%" }} />
              <p className='text-muted small mt-3'>Our asset management venture <br />
                that is creating simple and transparent index <br />
                funds to help you save for your goals.</p>
            </div>
            <div className='my-4'>

              <img src="images/streakLogo.png" alt="image" style={{ width: "50%" }} />
              <p className='text-muted small mt-3'>Systematic trading platform <br />
                that allows you to create and backtest <br />
                strategies without coding.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-4">
            <div>
              <img src="images/sensibullLogo.svg" alt="image" style={{ width: "50%" }} />
              <p className='text-muted small mt-3'>Options trading platform that lets you <br />
                create strategies, analyze positions, and examine <br />
                data points like open interest, FII/DII, and more.</p>
            </div>
            <div className='my-4'>

              <img src="images/smallcaseLogo.png" alt="image" style={{ width: "70%" }} className='mt-3' />
              <p className='text-muted small mt-3'>Thematic investing platform <br />
                that helps you invest in diversified  <br />
                baskets of stocks on ETFs.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-4">
            <div>
              <img src="images/goldenpiLogo.png" alt="image" style={{ width: "50%" }} />
              <p className='text-muted small mt-3'>Investment research platform <br />
                that offers detailed insights on stocks, <br />
                sectors, supply chains, and more.</p>
            </div>
            <div className='my-4'>

              <img src="images/dittoLogo.png" alt="image" style={{ width: "40%" }} />
              <p className='text-muted small mt-3'>Systematic trading platform <br />
                that allows you to create and backtest <br />
                strategies without coding.</p>
            </div>
          </div>
           <button className="btn btn-primary fs-5 hero-cta my-4">Sign up for free</button>

        </div>
      </div>
    </>
  )
}

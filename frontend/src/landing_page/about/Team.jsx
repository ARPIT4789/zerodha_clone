import React from 'react'

export default function Team() {
  return (
    <div>
      <div className="container px-3 px-lg-5 about-section">
        <div className="row g-4">
          <h4 className='text-center my-4'>People</h4>
          <div className="col-12 col-lg-6 text-center text-muted">
            <img src="images/nithinKamath.jpg" alt="Nithin Kamath" style={{ width: "60%", borderRadius: "100%" }} />
            <h5 className='my-2'>Nithin Kamath</h5>
            <h6>Founder,CEO</h6>
          </div>
          <div className="col-12 col-lg-6" style={{fontSize:"1.08rem"}}>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

            <p>Playing basketball is his zen.</p>

            <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

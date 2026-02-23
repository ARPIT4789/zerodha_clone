import React from 'react'

export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#EBEBEB" }} className="py-4">
        <div className="container">
          {/* Vertically centered and horizontally spaced */}
          <div className='d-flex justify-content-between align-items-center flex-wrap gap-3'>
            <h2>Support Portal</h2>
            <button className='btn btn-primary fs-6 px-4 support-ticket-btn'>My tickets</button>
          </div>

          {/* Styled Bootstrap Input */}
          <div className="input-group input-group-lg flex-nowrap mt-4 mb-4">
            <span className="input-group-text" id="addon-wrapping">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              className='form-control'
              placeholder="Search for tickets..."
            />
          </div>

        </div>
      </div>

    </>
  )
}

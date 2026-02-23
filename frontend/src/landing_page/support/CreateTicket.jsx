import React from 'react'

export default function CreateTicket() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className='mt-4'>
              <div className="border bg-white">
                {/* Header: Always Visible */}
                <div
                  className="d-flex align-items-center "
                  data-bs-toggle="collapse"
                  data-bs-target="#accountOpeningContent"
                  style={{ cursor: 'pointer', padding: ".65rem" }}
                >
                  <div className="bg-light p-2 rounded-circle me-3 border">
                    <i className="fa-solid fa-plus text-primary"></i>
                  </div>

                  <span className="flex-grow-1 fw-medium text-dark" style={{ fontSize: '1.2rem' }}>
                    Account Opening
                  </span>
                  <i className="fa-solid fa-chevron-up text-primary"></i>
                </div>

                {/* Collapsible Content: The List */}
                <div className="collapse border-top" id="accountOpeningContent">
                  <ul className="list-unstyled p-4 m-0">
                    <li className="mb-3">
                      <a href="#" className="text-decoration-none text-primary">• Resident individual</a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className="text-decoration-none text-primary">• Minor</a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className="text-decoration-none text-primary">• Non Resident Indian (NRI)</a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className="text-decoration-none text-primary">• Company, Partnership, HUF and LLP</a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none text-primary">• Glossary</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <div className="border bg-white overflow-hidden">
                {/* Header: Clickable Area */}
                <div
                  className="d-flex align-items-center p-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#zerodhaAccount"
                  style={{ cursor: 'pointer' }}
                >
                  {/* Profile Icon */}
                  <div className="text-primary me-3 fs-5 border-end pe-3">
                    <i className="fa-regular fa-circle-user"></i>
                  </div>

                  {/* Title */}
                  <span className="flex-grow-1 fw-medium text-dark" style={{ fontSize: '1.2rem' }}>
                    Your Zerodha Account
                  </span>

                  {/* Chevron Icon */}
                  <i className="fa-solid fa-chevron-up text-primary small"></i>
                </div>

                {/* Collapsible Content */}
                <div className="collapse" id="zerodhaAccount">
                  <div className="ps-5 pb-4">
                    <ul className="list-unstyled m-0">
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• Your Profile</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• Account modification</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• Client Master Report (CMR) and Depository Participant (DP)</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• Nomination</a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none text-primary fw-normal">• Transfer and conversion of securities</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4'>

              <div className="border bg-white">
                {/* Header Section */}
                <div
                  className="d-flex align-items-center p-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#kiteContent"
                  style={{ cursor: 'pointer' }}
                >
                  {/* Left Kite Icon Wrapper */}
                  <div className="text-primary me-3 pe-3 border-end d-flex align-items-center justify-content-center" style={{ width: '40px' }}>
                    <i className="fa-solid fa-compass fs-5"></i>
                  </div>

                  {/* Title */}
                  <span className="flex-grow-1 fw-medium text-dark" style={{ fontSize: '1.2rem' }}>Kite</span>

                  {/* Right Chevron */}
                  <i className="fa-solid fa-chevron-up text-primary small"></i>
                </div>

                {/* Expanded Content Section */}
                <div className="collapse " id="kiteContent">
                  <div className="ps-5 pb-4">
                    <ul className="list-unstyled m-0 ps-2">
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; IPO</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Trading FAQs</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Margin Trading Facility (MTF) and Margins</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Charts and orders</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Alerts and Nudges</a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; General</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="border bg-white">
                {/* Header Section */}
                <div
                  className="d-flex align-items-center p-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#fundsContent"
                  style={{ cursor: 'pointer' }}
                >
                  {/* Left Rupee Icon Wrapper */}
                  <div className="me-3 pe-3 border-end d-flex align-items-center">
                    <div className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '32px', height: '32px', backgroundColor: '#f0f7ff', border: '1px solid #e0e0e0' }}>
                      <i className="fa-solid fa-indian-rupee-sign text-primary" style={{ fontSize: '0.85rem' }}></i>
                    </div>
                  </div>

                  {/* Title */}
                  <span className="flex-grow-1 fw-medium text-dark fs-5">Funds</span>

                  {/* Right Chevron */}
                  <i className="fa-solid fa-chevron-up text-primary small"></i>
                </div>

                {/* Expanded Content Section */}
                <div className="collapse " id="fundsContent">
                  <div className="ps-5 pb-4">
                    <ul className="list-unstyled m-0 ps-4">
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Add money</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Withdraw money</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Add bank accounts</a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; eMandates</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-4">
              <div className="border bg-white">
                {/* Header Section */}
                <div
                  className="d-flex align-items-center p-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#consoleContent"
                  style={{ cursor: 'pointer' }}
                >
                  {/* Left '@' Icon Wrapper with light background */}
                  <div className="me-3 pe-3 border-end d-flex align-items-center">
                    <div className="rounded d-flex align-items-center justify-content-center"
                      style={{ width: '36px', height: '36px', backgroundColor: '#f8fbff' }}>
                      <i className="fa-solid fa-at text-primary" style={{ fontSize: '1rem' }}></i>
                    </div>
                  </div>

                  {/* Title */}
                  <span className="flex-grow-1 fw-medium text-dark fs-5">Console</span>

                  {/* Right Chevron */}
                  <i className="fa-solid fa-chevron-up text-primary small"></i>
                </div>

                {/* Expanded Content Section */}
                <div className="collapse " id="consoleContent">
                  <div className="ps-5 pb-4">
                    <ul className="list-unstyled m-0 ps-4">
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Portfolio</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Corporate actions</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Funds statement</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Reports</a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Profile</a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none text-primary fw-normal">• &nbsp; Segments</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="col-12 col-lg-3 mt-4 mt-lg-0">
            <div
              className="p-3 rounded-end d-flex align-items-center mt-3"
              style={{
                backgroundColor: "#FFF5EC", // Light orange/cream background
                borderLeft: "8px solid #FF9800", // Thick orange left border
                lineHeight: "1.8"
              }}
            >
              <ul className="list-unstyled m-0 ps-2">
                <li className="mb-1">
                  <a href="#" className="text-primary text-decoration-underline fs-6">
                    • Surveillance measure on scrips - February 2026
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary text-decoration-underline fs-6">
                    • Current Buybacks - February 2026
                  </a>
                </li>
              </ul>
            </div>
            <div className="card shadow-sm border-0" style={{ maxWidth: '450px' }}>
              {/* Header */}
              <div className="card-header bg-light border-bottom-0 py-3 mt-4">
                <h5 className="mb-0 fw-bold text-secondary fs-6">Quick links</h5>
              </div>

              {/* Links List */}
              <div className="list-group list-group-flush border-top">
                <a href="#" className="list-group-item list-group-item-action border-bottom py-2 text-primary">
                  1. Track account opening
                </a>
                <a href="#" className="list-group-item list-group-item-action border-bottom py-2 text-primary">
                  2. Track segment activation
                </a>
                <a href="#" className="list-group-item list-group-item-action border-bottom py-2 text-primary">
                  3. Intraday margins
                </a>
                <a href="#" className="list-group-item list-group-item-action border-bottom py-2 text-primary">
                  4. Kite user manual
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0 py-2 text-primary">
                  5. Learn how to create a ticket
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

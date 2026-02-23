import React from 'react'

export default function RightSection({ product, productDescription, learnMore, imageUrl }) {
  return (
    <div className="container product-section">
      <div className="row align-items-center g-4 my-4">
        <div className="col-12 col-lg-6 px-lg-5 order-2 order-lg-1">
          <h1 className='fs-3'>{product}</h1>
          <p className='opacity-75 mt-3'>{productDescription}</p>
          <a href={learnMore}>
            Learn more <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>
        <div className='col-12 col-lg-6 text-center text-lg-start order-1 order-lg-2'>
          <img src={imageUrl} alt="image" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

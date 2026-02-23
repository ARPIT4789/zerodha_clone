import React from 'react'

export default function LeftSection({ imageUrl, product, productDescription, tryDemo, learnMore, googlePlay, AppStore }) {
  return (
    <>
      <div className="container product-section">
        <div className="row align-items-center g-4 my-4">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <img src={imageUrl} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-6 px-lg-5">
            <h1 className='fs-3'>{product}</h1>
            <p className='opacity-75 mt-3'>{productDescription}</p>

            <div className='my-4 product-links'>
              <a href={tryDemo}>Try demo <i className="fa-solid fa-arrow-right ms-2"></i></a>
              <a href={learnMore}>Learn more <i className="fa-solid fa-arrow-right ms-2"></i></a>
            </div>

            <div className="store-badges">
              <a href={googlePlay}>
                <img src="images/googlePlayBadge.svg" alt="google play" />
              </a>
              <a href={AppStore}>
                <img src="images/appstoreBadge.svg" alt="app store" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

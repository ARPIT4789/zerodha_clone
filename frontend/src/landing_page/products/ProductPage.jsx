import React from 'react'
import Home from './Home'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

export default function ProductPage() {
  return (
    <div className="product-page">
    <Home/>
    <LeftSection imageUrl="images/kite.png" product="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" AppStore=""/>
    <RightSection product="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="" imageUrl="images/console.png"/>
    <LeftSection imageUrl="images/coin.png" product="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" AppStore=""/>
    <RightSection product="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="" imageUrl="images/kiteconnect.png"/>
    <LeftSection imageUrl="images/varsity.png" product="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" AppStore=""/>

    <p className='text-center'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
    <Universe/>
    </div>
  )
}

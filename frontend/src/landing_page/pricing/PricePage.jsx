import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'
import OpenAccount from '../OpenAccount'
import Equity from './Equity'

export default function PricePage() {
  return (
    <div className="pricing-page">
      <Hero/>
      <Equity/>
      <OpenAccount/>
      <Brokerage/>
    </div>
  )
}

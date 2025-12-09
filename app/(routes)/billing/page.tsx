import React from 'react'
import { PricingTable } from '@clerk/nextjs'

const Billing = () => {
  return (
    <div >
        <h1 className='text-center text-xl font-semibold mb-4'>Choose Your Plan</h1>
        <p className='text-center mb-4 text-gray-600 mb-12'>Select a subscription plan that fits your needs.</p>
        <PricingTable />
    </div>
  )
}

export default Billing

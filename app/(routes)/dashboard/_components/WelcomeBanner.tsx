import React from 'react'
import { Button } from '@/components/ui/button'

const WelcomeBanner = () => {
  return (
    <div className='pl-8 p-4 border border-gray-200 rounded-xl shadow-sm hover:border-blue-400 transition-all duration-200 bg-blue-50/50'>
      <h1 className='text-xl font-semibold py-3'>AI Career Guide Agent</h1>
      <p className='pb-4'>AI Career Guide helps you make smarter career decisions with personalized guidance, powerful AI tools, and clear insights tailored to your goals. Everything you need for growth—simple, fast, and in one place.</p>
      <Button className='mb-2'>Get Started</Button>
    </div>
  )
}

export default WelcomeBanner

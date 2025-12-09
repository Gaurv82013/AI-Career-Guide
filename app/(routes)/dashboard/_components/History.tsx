"use client"
import React from 'react'
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const History = () => {
    const [userHistory, setUserHistory] = useState([]);
  return (
    <div>
      <h1 className='text-2xl font-bold py-2'>Previous History</h1>
      <p className='py-2'>What your previous interactions and activities were.</p>
      {userHistory.length === 0 &&
        <div>
            <History />
            <p>You do not have any history yet.</p>
            <Button>Get Started</Button>
        </div>
      
      }
    </div>
       
  )
}

export default History

"use client"
import React from 'react'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FolderClock } from "lucide-react"

const History = () => {
    const [userHistory, setUserHistory] = useState([]);
  return (
    <div className='mt-6 p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-all duration-300'>
      <h1 className='text-2xl font-bold'>Previous History</h1>
      <p className='py-2'>What your previous interactions and activities were.</p>
      {userHistory.length === 0 &&
        <div className='flex justify-center items-center flex-col space-y-4 mt-6'>
            <FolderClock />
            <p>You do not have any history yet.</p>
            <Button>Explore AI Tools</Button>
        </div>
      
      }
    </div>
       
  )
}

export default History

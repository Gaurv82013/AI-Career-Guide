import React from 'react'
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface AiTool {
    name: string;
    description: string;
    icon: LucideIcon;
    button: string;
    path: string;
}

const AiToolsCard = ({ tool }: { tool: AiTool }) => {
  return (
    <div>
      <div className='p-4 mt-4 border border-gray-200 rounded-lg flex flex-col items-start bg-blue-50/50 hover:border-blue-400 transition-all duration-200'>
        <div className='w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center py-2'>
            {React.createElement(tool.icon, { className: 'w-6 h-6 text-white' })}
        </div>
        <h2 className='text-lg font-semibold py-2'>{tool.name}</h2>
        <p className='text-sm text-gray-500 py-2'>{tool.description}</p>
        <Link href={tool.path} className='mt-2'>
          <Button>{tool.button}</Button>
        </Link>
        
      </div>
    </div>
  )
}

export default AiToolsCard

import React from 'react'
import { MessageCircle, FileText, Map, Mail, MessageSquare } from 'lucide-react';
import AiToolsCard from './AiToolsCard';

const aiToolsList=[
    {
      name: "AI Career Q&A Chatbot",
      description: "Ask about career paths, job roles, and industry trends for personalized advice and guidance.",
      icon: MessageSquare,
      button: "Ask Now",
      path: "/ai-career-chat",
    },
    {
      name: "AI Resume Analyzer Tool",
      description: "Get instant feedback on your resume with AI-powered analysis to boost your job prospects.",
      icon: FileText,
      button: "Analyze Now",
      path: "/ai-resume-analyzer",
    },
    {
      name: "Career Roadmap Generator",
      description: "Create a personalized career roadmap using AI to achieve your professional goals step-by-step.",
      icon: Map,
      button: "Generate Now",
      path: "/career-roadmap-generator",
    },
    {
      name: "AI Cover Letter Creator",
      description: "Generate professional cover letters tailored to your job applications using advanced AI.",
      icon: Mail,
      button: "Generate Now",
      path: "/cover-letter-generator",
    }
]

const AiTools = () => {
  return (
    <div className='p-4 mt-6 border border-gray-200 rounded-lg'>
      <h1 className='text-2xl font-bold py-2'>AI Tools</h1>
      <p className='py-2'>Shape your future with cutting-edge AI tools designed to enhance your career growth and decision-making process.</p>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-4 '>
        {aiToolsList.map((tool,index)=>
            <AiToolsCard key={index} tool={tool} />
        )}
      </div>
    </div>
  )
}

export default AiTools

import React from 'react'
import { Sidebar } from './Sidebar'
import { MessageContainer } from './MessageContainer'

export const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-300 bg-white flex flex-col h-1/2 md:h-full">
        <Sidebar />
      </div>

      {/* Message Container */}
      <div className="flex-1 flex flex-col h-1/2 md:h-full">
        <MessageContainer />
      </div>
    </div>
  )
}

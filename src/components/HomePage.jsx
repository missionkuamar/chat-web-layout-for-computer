import React from 'react'
import { Sidebar } from './Sidebar'
import { MessageContainer } from './MessageContainer'

export const HomePage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-gray-300 bg-white flex flex-col">
        <Sidebar />
      </div>

      {/* Message Area */}
      <div className="flex-1 flex flex-col">
        <MessageContainer />
      </div>
    </div>
  )
}

import React from 'react'
import { OtherUsers } from './OtherUsers'

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Search bar */}
      <div className="p-4 border-b border-gray-300">
        {/* Your search input/button */}
      </div>

      {/* Scrollable user list */}
      <OtherUsers />
    </div>
  )
}

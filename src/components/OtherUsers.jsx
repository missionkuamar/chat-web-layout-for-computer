import React from 'react'
import { OtherUser } from './OtherUser'

export const OtherUsers = () => {
  return (
    <div className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      {[...Array(30)].map((_, i) => (
        <OtherUser key={i} />
      ))}
    </div>
  )
}

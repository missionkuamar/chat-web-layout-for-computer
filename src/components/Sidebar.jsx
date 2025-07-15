import React from 'react'
import { OtherUsers } from './OtherUsers'
import { FaSearch } from "react-icons/fa"

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="p-4 border-b border-gray-300 bg-white">
        <form className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-800 transition"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Scrollable User List */}
      <OtherUsers />
    </div>
  )
}

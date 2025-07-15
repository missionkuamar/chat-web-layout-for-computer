import React from 'react'

export const MessageContainer = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-300 bg-white">
        <h2 className="text-lg font-semibold">Chat with John</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {/* Example messages */}
        <div className="self-start max-w-xs bg-white p-3 rounded-lg shadow text-sm">
         
         
          Hello! How are you?
           Hello! How are you? Hello! How are you? Hello! How are you? Hello! How are you? Hello! How are you? Hello! How are you? Hello! How are you? Hello! How are you? Hello! How are you? Hello! How are you? Hello! How are you? Hello! How are you?
        </div>
        <div className="self-end max-w-xs bg-blue-600 text-white p-3 rounded-lg shadow text-sm">
          I'm good, thanks!
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </div>
        <div className="self-start max-w-xs bg-white p-3 rounded-lg shadow text-sm">
          Do you want to catch up later?
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </div>
        <div className="self-end max-w-xs bg-blue-600 text-white p-3 rounded-lg shadow text-sm">
          Sure, sounds good 👍
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                  lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </div>
        {/* Repeat as needed */}
      </div>

      {/* Input area */}
      <div className="px-4 py-3 border-t border-gray-300 bg-white">
        <form className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

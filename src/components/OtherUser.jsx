import React from 'react'

export const OtherUser = () => {
  return (
    <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://imgs.search.brave.com/MWvyDhxZs2NLPo_aelg_08qYe-Pg5eb3SYd8HPVu9J8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1qSXpNalUx/TURJMU9WNUJNbDVC/YW5CblhrRnRaVGN3/TXpBM01UVXpOQUBA/Ll9WMV9RTDc1X1VY/ODIwXy5qcGc"
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* User Info */}
      <div className="flex flex-col">
        <span className="font-medium text-gray-800">John Doe</span>
        <span className="text-sm text-gray-500">Hey, how's it going?</span>
      </div>
    </div>
  )
}

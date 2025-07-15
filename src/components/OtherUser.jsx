import React from 'react'

export const OtherUser = () => {
  return (
    <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://imgs.search.brave.com/fePtxgsTYXkAXsNb9B_KJC8qGJeRAjMQbeRThyPRhd4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IveW91bmctd29t/YW4tYXZhdGFyLWlz/b2xhdGVkLWljb24t/dmVjdG9yLWlsbHVz/dHJhdGlvbi1kZXNp/Z25fMjQ4NzctMTU0/NjUuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA"
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-gray-800">John Doe</span>
        <span className="text-sm text-gray-500 truncate">Hey, how's it going?</span>
      </div>
    </div>
  )
}

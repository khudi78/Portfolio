import React from 'react'

function Navbar() {
  return (
    <div className=''>
       

<nav class="bg-[#081b38]  fixed top-0 w-full z-50">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-[3000px]">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
       
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        
        <div class="hidden sm:ml-6 sm:block ">
          <div class="flex space-x-4 w-[500px] mx-[300px]">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
           
            <a href="#" class="rounded-md px-3 py-2 text-lg font-medium  text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
            {/* <a href="#" class="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Me</a> */}
            <a href="#" class="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Skills</a>
            <a href="#" class="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">My Work</a>
            <a href="#" class="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>

          </div>
        </div>
      </div>
    
    </div>
  </div>

</nav>

        
    </div>
  )
}

export default Navbar
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-[17px] container max-w-[85%] mx-auto">
        <p className='text-[#01996D] text-2xl font-bold'>Alivio</p>
        <ul className='flex items-center gap-3'>
            <li>Why Alivio</li>
            <li>Why Alivio</li>
            <li>Why Alivio</li>
            <li>Why Alivio</li>
        </ul>
        <div className="flex items-center gap-3">
            <button>Sign in</button>
            <button className='py-[13px] px-[50px] bg-[#01996D] text-white rounded-[4px]'>Start Trial</button>
        </div>
    </div>
  )
}

export default Navbar